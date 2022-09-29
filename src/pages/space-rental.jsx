import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/Layout";
import SectionDivider from "../components/SectionDivider";
import StudioList from "../components/StudioList";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import space3031 from "../images/space-rental/303.1.png";
import space3032 from "../images/space-rental/303.2.png";
import space3033 from "../images/space-rental/303.3.png";
import space4011 from "../images/space-rental/studioPicPink.png";
import space4012 from "../images/space-rental/401.2.png";
import space4013 from "../images/space-rental/401.3.png";
import smallMiddleStudio from "../images/space-rental/smallMiddleStudio.png";
import styled from "styled-components";

const Pricing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.625rem;

  h3 {
    font-size: 2rem;
  }

  .pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 3rem 0;
  }

  .pricing-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    border: 2px solid #efefef;
    height: 30rem;

    h4 {
      font-weight: 900;
      font-size: 1.5rem;
    }

    .price {
      font-size: 1rem;
    }

    .cost {
      font-weight: 900;
      font-size: 3rem;
    }

    li {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 550px) {
    .pricing-table {
      padding: 1rem;
      height: 26rem;
      button {
        font-size: 1rem;
      }
    }
  }
`;

const SpaceRental = () => {
  return (
    <Layout>
      <ImageAndContentHeader
        title="Space Rental"
        content="Our two gorgeous studio spaces located at 4001 N Ravenswood Ave are perfect for your next workshop, rehearsal, photo shoot, or reading. See below for pictures, details, and pricing."
        image={space3031}
      />
      <SectionDivider />
      <StudioList
        title="Studio 303-B"
        content="Versatile 800 sq ft loft partially divided by a half wall, featuring a  gathering space with a kitchenette. South facing windows with tons of natural light."
        list={[space3032, smallMiddleStudio, space3033]}
      />

      <StudioList
        title="Studio 401-E"
        content="600 sq ft loft with south and west facing windows. Blackout and diffusion curtains. Photography backdrops available."
        list={[space4011, space4012, space4013]}
      />

      <Pricing>
        <h3>Pricing</h3>
        <div className="pricing">
          <div className="pricing-table">
            <h4>303-B</h4>
            <div className="price">
              <span className="cost">$35</span>/hour
            </div>
            <ul>
              <li>Space Rental Policies</li>
              <li>Tables & Chairs</li>
              <li>Wifi & Kitchenette</li>
            </ul>
            <a
              href="https://studio303-b.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="button fill"
            >
              See availability & book now
            </a>
          </div>
          <div className="pricing-table">
            <h4>401-E</h4>
            <div className="price">
              <span className="cost">$25</span>/hour
            </div>
            <ul>
              <li>Space Rental Policies</li>
              <li>Tables & Chairs</li>
              <li>Backdrops available</li>
            </ul>
            <a
              href="https://studio401-e.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="button fill"
            >
              See availability & book now
            </a>
          </div>
          <div className="pricing-table">
            <h4>Working for a 501-(C)(3)?</h4>
            <p>Ask about nonprofit pricing.</p>
            <a
              href="mailto:jack@greenshirtstudio.com?subject=Rental"
              className="button fill"
            >
              Inquire
            </a>
          </div>
        </div>
      </Pricing>
    </Layout>
  );
};
export default SpaceRental;

export const Head = () => <SEO title={`Space Rental - Green Shirt Studio`} />;
