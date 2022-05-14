import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #2B5F36;
    --gray: #333333;
    --light-gray: #efefef;
    --black: #282828;
    --white: #FFFFFF;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: var(--white);
    color: var(--gray);
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.875rem;
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  .button {
    padding: 1rem 1.5rem;
    border: 0 solid white;
    border-radius: 32px;
    font-size: 1.25rem;
    font-weight: 900;
    min-width: 18rem;
    cursor: pointer;
  }

  .fill {
    background: var(--green);
    color: var(--white);
    :hover {
      background: var(--white);
      color: var(--green);
    }
  }

`;

export default GlobalStyles;
