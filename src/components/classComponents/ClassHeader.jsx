import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const StyledClassHeader = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;

  align-items: center;

  h2 {
    font-size: 2rem;
    line-height: 2.3rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 47rem;
    padding-right: 1rem;
  }

  .info {
    padding-left: 1rem;
    padding-right: 2.25rem;
    width: 50%;

    p {
      line-height: 1.875rem;
      font-size: 1.25rem;
      max-width: 33rem;
      color: var(--dark-gray);
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
    ul {
      list-style-type: none;
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
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

const ClassHeader = ({ wpClass }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event, type) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: type === "single" ? "payment" : "subscription",
      lineItems: [
        {
          price:
            type === "single"
              ? wpClass.classGroup.stripeId
              : wpClass.classGroup.stripeInstallmentId,
          quantity: 1,
        },
      ],
      successUrl: `${process.env.GATSBY_URL_ENVIRONMENT}/success`,
      cancelUrl: `${process.env.GATSBY_URL_ENVIRONMENT}/cancel`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <StyledClassHeader>
      <img src={wpClass.classGroup.classImage.sourceUrl} alt={wpClass.title} />
      <div className="info">
        <h2>{wpClass.title}</h2>
        <p>{`${wpClass.classGroup.day}, ${wpClass.classGroup.dates[0].date} - ${
          wpClass.classGroup.dates[wpClass.classGroup.dates.length - 1].date
        }, ${wpClass.classGroup.time} with ${wpClass.author.node.name}`}</p>

        <div className="price">
          ${wpClass.classGroup.price} <br />
          <small>or $110 every 3 weeks (payment plan)</small>
        </div>

        <ul className="pricing-buttons">
          <li>
            <button
              className={"button fill"}
              disabled={loading}
              onClick={(e) => redirectToCheckout(e, "single")}
            >
              Register
            </button>
          </li>
          <li>
            <button
              className={"button"}
              disabled={loading}
              onClick={(e) => redirectToCheckout(e, "installment")}
            >
              3-Week Installment
            </button>
          </li>
        </ul>
      </div>
    </StyledClassHeader>
  );
};
export default ClassHeader;
