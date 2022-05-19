import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import quotationBubble from "../images/quotationBubble.svg";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  height: 35.875rem;

  background: var(--green);
  color: var(--white);

  img {
    margin-top: 9.5rem;
  }

  .quoteArea {
    max-width: 40rem;
    margin: auto;
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
    <div className="quoteArea">
      <p className="quote">{quote.node.Quote}</p>
      <p className="name">{quote.node.Signature}</p>
    </div>
  ));
  return (
    <StyledTestimonial>
      <img src={quotationBubble} alt="quotations" width="76" />
      <AliceCarousel mouseTracking items={items} />
    </StyledTestimonial>
  );
};
export default Testimonial;
