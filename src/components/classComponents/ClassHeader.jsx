import React, { useState } from "react";
import useSWR from "swr";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const StyledClassHeader = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;

  align-items: center;

  h2 {
    font-size: 2rem;
    line-height: 2.625rem;
    margin-bottom: 1rem;
  }

  img {
    width: 62%;
    padding-right: 1rem;
  }

  .info {
    padding-left: 1rem;
    padding-right: 2.25rem;
    width: 38%;

    p {
      line-height: 1.875rem;
      font-size: 1.25rem;
      max-width: 33rem;
      color: var(--dark-gray);
    }

    .spots-left {
      margin: 1.25rem 0 3.25rem;

      span {
        background: var(--salmon);
        padding: 0.25rem 0.75rem;
        border-radius: 28px;
        font-size: 0.875rem;
      }
    }

    .price {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 2rem;

      small {
        font-size: 1rem;
        color: var(--dark-gray);
      }
    }
  }

  .pricing-buttons {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0;

    button {
      padding: 1rem 1.5rem;
      border-radius: 2px;
      font-size: 1.25rem;
      font-weight: 900;
      text-decoration: none;
      display: inline;
      color: var(--black);
      cursor: pointer;

      :active {
        transform: translateY(2px) translateX(2px);
      }
    }

    .register {
      border: none;
      background: var(--neon-green);
      border: 2px solid var(--neon-green);

      :hover {
        opacity: 0.6;
      }

      :active {
        transform: translateY(2px) translateX(2px);
      }
    }

    .installment {
      border: 2px solid var(--black);
      background: var(--white);
      border-radius: 2px;

      :hover {
        opacity: 0.6;
      }

      :active {
        transform: translateY(2px) translateX(2px);
      }
    }
  }

  @media (max-width: 1333px) {
    .pricing-buttons {
      flex-direction: column;

      li,
      button {
        width: 100%;
        margin: 0;
      }
    }
  }

  @media (max-width: 970px) {
    flex-direction: column;

    img,
    .info {
      width: 100%;
      padding: 0;
    }

    .info {
      padding: 0 1rem;
    }
    img {
      margin-bottom: 2rem;
    }
    button {
      width: 100%;
      margin: 1rem auto;
    }
  }
`;

let stripePromise;
const getStripe = (test) => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      test
        ? process.env.GATSBY_STRIPE_PUBLISHABLE_TEST_KEY
        : process.env.GATSBY_STRIPE_PUBLISHABLE_KEY
    );
  }
  return stripePromise;
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ClassHeader = ({ wpClass }) => {
  const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    `https://greenshirtstudiowp.us/wp-json/wp/v2/class/${wpClass.databaseId}`,
    fetcher
  );

  const spotsLeft = data ? `${data.acf.spots_left} spots left` : "loading";

  const handlePurchase = async (e, paymentType) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        test: wpClass.classGroup.program === "Test",
        paymentType: paymentType,
        promotion: wpClass.classGroup.price > 0,
        lineItems: [
          {
            price:
              paymentType === "payment"
                ? wpClass.classGroup.stripeId
                : wpClass.classGroup.stripeInstallmentId,
            quantity: 1,
          },
        ],
        dayOfWeek: wpClass.classGroup.day,
        dbid: wpClass.databaseId,
      }),
    }).then((res) => res.json());

    const stripe = await getStripe(wpClass.classGroup.program === "Test");
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <StyledClassHeader>
      {wpClass.classGroup.classImage && (
        <img
          src={wpClass.classGroup.classImage.sourceUrl}
          alt={wpClass.title}
        />
      )}
      <div className="info">
        <h2>{wpClass.title}</h2>
        <p>{`${wpClass.classGroup.day}, ${wpClass.classGroup.dates[0].date} - ${
          wpClass.classGroup.dates[wpClass.classGroup.dates.length - 1].date
        }, ${wpClass.classGroup.time} with ${
          wpClass.classGroup.linkInstructor.title
        }`}</p>

        <div className="spots-left">
          <span>{spotsLeft}</span>
        </div>

        <div className="price">
          {data &&
            data.acf.spots_left > 0 &&
            (wpClass.classGroup.price > 0 ? (
              <>
                ${wpClass.classGroup.price} <br />
                {wpClass.classGroup.stripeInstallmentId && (
                  <small>or $110 every 2 weeks (payment plan)</small>
                )}
              </>
            ) : (
              <>Free/Donation</>
            ))}
        </div>

        <ul className="pricing-buttons">
          <li>
            {data ? (
              data.acf.spots_left > 0 ? (
                <button
                  className={"register"}
                  disabled={loading}
                  onClick={(e) => handlePurchase(e, "payment")}
                >
                  Register
                </button>
              ) : (
                <button disabled>SOLD OUT</button>
              )
            ) : (
              <button disabled className={"register"}>
                Register
              </button>
            )}
          </li>
          {wpClass.classGroup.stripeInstallmentId && (
            <li>
              <button
                className={"installment"}
                disabled={loading}
                onClick={(e) => handlePurchase(e, "subscription")}
              >
                Payment Plan
              </button>
            </li>
          )}
        </ul>
      </div>
    </StyledClassHeader>
  );
};
export default ClassHeader;
