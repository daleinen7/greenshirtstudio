import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
import { loadStripe } from '@stripe/stripe-js';
import { Script } from 'gatsby';
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
      margin-bottom: 3rem;
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

    a {
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
      a {
        display: flex;
        justify-content: center;
        align-items: center;
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
    li,
    a {
      width: 100%;
      margin: 1rem auto;
    }
  }
`;

const SessionHeader = ({ session }) => {
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
            <a
              className={'register'}
              href={session.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </StyledClassHeader>
  );
};
export default SessionHeader;
