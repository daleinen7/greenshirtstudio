import ZonaPro from '../lib/zonapro-extrabold-webfont.woff2';
import { createGlobalStyle } from 'styled-components';

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


  h2, h3 {
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
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

    :hover {
      opacity: 0.6;
    }

    :active {
      transform: translateY(2px) translateX(2px);
    }

    @media(max-width: 480px) {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      min-width: auto;
    }
  }

  .fill {
    background: var(--neon-green);
    color: var(--black);
  }

  .empty {
    background: var(--white);
    color: var(--black);
    border: 2px solid var(--black);
    
    :hover {
      border: 2px solid var(--dark-gray);
      color: var(--dark-gray);
    }
  }
  
  .alice-carousel__prev-btn-item, .alice-carousel__next-btn-item{
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
  .alice-carousel__next-btn-item{
    padding: 1px 0 0 12px;
  }
  .alice-carousel__prev-btn-item{
    padding: 1px 12px 0 0;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
