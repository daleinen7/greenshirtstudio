import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #2B5F36;
    --gray: #333333;
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
`;

export default GlobalStyles;
