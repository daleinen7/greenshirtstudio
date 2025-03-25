import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import SectionDivider from '../components/SectionDivider';
import StudioList from '../components/StudioList';
import ImageAndContentHeader from '../components/ImageAndContentHeader';
import space3031 from '../images/space-rental/303.1.png';
import space3032 from '../images/space-rental/303.2.png';
import space3033 from '../images/space-rental/303.3.png';
import space4011 from '../images/space-rental/studioPicPink.png';
import space4012 from '../images/space-rental/401.2.png';
import space4013 from '../images/space-rental/401.3.png';
import smallMiddleStudio from '../images/space-rental/smallMiddleStudio.png';
import greencheck from '../images/greencheck.svg';
import styled from 'styled-components';
import { graphql } from 'gatsby';

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

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style-type: none; /* Remove default bullet point */
      padding-left: 20px; /* Add some padding for the bullet point */

      /* Style the list items */
      li {
        position: relative; /* Position relative for absolute positioning of custom bullet */
        margin-bottom: 10px; /* Adjust margin as needed */
      }

      /* Style the custom bullet point */
      li:before {
        content: '';
        position: absolute;
        left: -28px; /* Adjust the distance of the bullet point from the left */
        top: -3px; /* Adjust the vertical alignment of the bullet point */
        width: 20px; /* Adjust size of the bullet point */
        height: 30px; /* Adjust size of the bullet point */
        background-image: url(${greencheck}); /* SVG URL */
      }
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

const SpaceRental = ({ data }) => {
  console.log(data);
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
          {data.allContentfulSpaceRental.nodes.map((space, idx) => {
            return (
              <div className="pricing-table" key={idx}>
                <h4>{space.name}</h4>
                <div className="price">
                  <span className="cost">${space.perHourCost}</span>/hour
                </div>
                <ul>
                  {space.amenities.map((amenity, amenity_index) => {
                    return <li key={amenity_index}>{amenity}</li>;
                  })}
                </ul>
                <a
                  href={space.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button fill"
                >
                  See availability & book now
                </a>
              </div>
            );
          })}
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

export const Head = () => (
  <SEO
    title={`Space Rental - Green Shirt Studio`}
    description={`Affordable Chicago space rental for artists. $25-$35. Space rental for photoshoots, rehearsals, workshops, and live shows. Tons of natural light.`}
  />
);

export const pageQuery = graphql`
  query SpaceRental {
    allContentfulSpaceRental {
      nodes {
        name
        perHourCost
        amenities
        bookingLink
      }
    }
  }
`;
