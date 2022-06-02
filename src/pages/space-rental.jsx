import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import StudioList from "../components/StudioList";
import ImageAndContentHeader from "../components/ImageAndContentHeader";
import styled from "styled-components";

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .pricing {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

const SpaceRental = () => {
  return (
    <Layout>
      <ImageAndContentHeader
        title="Space Rental"
        content="Our two gorgeous studio spaces located at 4001 N Ravenswood Ave are perfect for your next workshop, rehearsal, photo shoot, or reading. See below for pictures, details, and pricing."
        image="https://via.placeholder.com/703x527"
      />

      <StudioList
        title="Studio 303-B"
        content="Versatile 800 sq ft loft partially divided by a half wall, featuring a  gathering space with a kitchenette. South facing windows with tons of natural light."
        list={[
          "https://via.placeholder.com/416x290",
          "https://via.placeholder.com/416x290",
          "https://via.placeholder.com/416x290",
        ]}
      />

      <StudioList
        title="Studio 401-E"
        content="600 sq ft loft with south and west facing windows. Blackout and diffusion curtains. Photography backdrops available."
        list={[
          "https://via.placeholder.com/416x290",
          "https://via.placeholder.com/416x290",
          "https://via.placeholder.com/416x290",
        ]}
      />

      <Pricing>
        <h3>Pricing</h3>
        <div className="pricing">
          <div className="pricing-table">
            <h4>303-B</h4>
            <div className="price">$30/hour</div>
            <ul>
              <li>Space Rental Policies</li>
              <li>Tables & Chairs</li>
              <li>Wifi & Kitchenette</li>
            </ul>
            <Link to="#">See availability & book now</Link>
          </div>
          <div className="pricing-table">
            <h4>401-E</h4>
            <div className="price">$20/hour</div>
            <ul>
              <li>Space Rental Policies</li>
              <li>Tables & Chairs</li>
              <li>Backdrops available</li>
            </ul>
            <Link to="#">See availability & book now</Link>
          </div>
        </div>
      </Pricing>
    </Layout>
  );
};
export default SpaceRental;
