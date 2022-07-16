import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 35.875rem;

  background: var(--neon-green);

  .quote-block {
    max-width: 40rem;
    position: relative;
    padding: 3rem;
    background: var(--black);
    color: var(--black);
    transform: rotate(0deg);

    margin: 0 auto;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      transform: rotate(-4deg);
      z-index: -1;
    }
  }

  .alice-carousel__wrapper {
    overflow: visible;
  }

  p.quote {
    font-weight: 300;
    font-size: 1.75rem;
    line-height: 2.625rem;
    padding-bottom: 1.75rem;
  }

  p.name {
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allStrapiTestimonial {
        edges {
          node {
            id
            Signature
            Quote
          }
        }
      }
    }
  `);

  const items = data.allStrapiTestimonial.edges.map((quote) => (
    <div className="quote-block">
      <div className="quote-area">
        <p className="quote">{quote.node.Quote}</p>
        <p className="name">{quote.node.Signature}</p>
      </div>
    </div>
  ));
  return (
    <StyledTestimonial>
      <AliceCarousel mouseTracking items={items} />
    </StyledTestimonial>
  );
};
export default Testimonial;
