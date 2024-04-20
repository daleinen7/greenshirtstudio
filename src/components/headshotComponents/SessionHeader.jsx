import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

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

const SessionHeader = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://greenshirtstudiowp.us/wp-json/wp/v2/class/${session.databaseId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       let actualData = await response.json();
  //       setData(actualData);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  // const handlePurchase = async (e, paymentType) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = {
  //     test: session.classGroup.program === 'Test',
  //     paymentType: paymentType,
  //     promotion: session.classGroup.price > 0,
  //     lineItems: [
  //       {
  //         price:
  //           paymentType === 'payment'
  //             ? session.classGroup.stripeId
  //             : session.classGroup.stripeInstallmentId,
  //         quantity: 1,
  //       },
  //     ],
  //     dayOfWeek: session.classGroup.day,
  //     dbid: session.databaseId,
  //     className: session.title,
  //     time: session.classGroup.time,
  //     instructor: session.classGroup.linkInstructor.title,
  //     location: session.classGroup.location,
  //     slug: session.slug,
  //     classDates: session.classGroup.dates,
  //     session: session,
  //   };

  //   const response = await fetch('/.netlify/functions/create-checkout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((res) => res.json());

  //   const stripe = await getStripe(session.classGroup.program === 'Test');
  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: response.sessionId,
  //   });
  //   if (error) {
  //     console.warn('Error:', error);
  //     setLoading(false);
  //   }
  // };

  return (
    <StyledClassHeader>
      {session && (
        <img
          src={session['Top of Page Image'][0].url}
          alt={'examples of headshots'}
        />
      )}
      <div className="info">
        <h2>Headshots with {session['Photographer Name']}</h2>
        <p>{`${session['Day of week']}, ${session['Month']}, ${session['Time of shoot']}`}</p>

        <div className="price">${session.Price}</div>

        <ul className="pricing-buttons">
          <li>
            <button
              className={'register'}
              // disabled={loading}
              // onClick={(e) => handlePurchase(e, 'payment')}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </StyledClassHeader>
  );
};
export default SessionHeader;
