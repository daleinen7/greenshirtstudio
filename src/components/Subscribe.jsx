import React from 'react';
import subscribeBG from '../images/subscribeBG.svg';
import styled from 'styled-components';

const StyledSubscribe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.875rem 0;
  overflow: hidden;

  .subscribeBG {
    background-image: url(${subscribeBG});
    background-repeat: no-repeat;
    width: 880px;
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 1.5;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    line-height: 2.625rem;
    text-align: center;
    max-width: 40rem;
    margin-bottom: 2rem;
  }

  a {
    text-align: center;
  }

  @media (max-width: 785px) {
    padding: 3.5rem;

    h3 {
      font-size: 1.125rem;
      max-width: 400px;
    }
  }

  @media (max-width: 560px) {
    h3 {
      font-size: 1.125rem;
      max-width: 300px;
      font-weight: 900;
      line-height: 150%;
    }
  }
`;

const Subscribe = ({ messaging, buttonText }) => {
  return (
    <StyledSubscribe>
      <div className="subscribeBG">
        <h3>{messaging ? messaging : 'Subscribe to our newsletter'}</h3>
        <a
          href="https://greenshirtstudio.us1.list-manage.com/subscribe/post?u=cd12c56d3b216488464876fcb&id=859a5605d5"
          className="button fill"
        >
          {buttonText ? buttonText : 'Newsletter Registration'}
        </a>
      </div>
    </StyledSubscribe>
  );
};
export default Subscribe;
