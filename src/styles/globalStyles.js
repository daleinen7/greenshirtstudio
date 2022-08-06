import ZonaPro from "../lib/ZonaPro-Bold.otf";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: "Zona Pro";
      src: url(${ZonaPro});
    }
  :root {
    --neon-green: #8CEEA0;
    --salmon: #F8BCBE;
    --green: #2B5F36;
    --dark-gray: #595959;
    --gray: #BABABA;
    --light-gray: #efefef;
    --sand: #E8E0CC;
    --black: #141815;
    --white: #FFFFFF;
  }


  h2 {
    font-family: "Zona Pro", serif;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: var(--white);
    color: var(--black);
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
    border-radius: 2px;
    font-size: 1.25rem;
    font-weight: 900;
    min-width: 18rem;
    text-decoration: none;
    display: inline;
    cursor: pointer;
  }

  .fill {
    background: var(--neon-green);
    color: var(--black);
    :hover {
      outline: 2px solid var(--neon-green);
      background: var(--white);
      color: var(--black);
    }
  }

`;

export default GlobalStyles;
