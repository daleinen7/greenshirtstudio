import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledClassCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  min-width: 20rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 1.625rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  small {
    font-size: 1rem;
    line-height: 1.3rem;
    color: var(--black);
  }

  .program {
    color: var(--dark-gray);
  }

  a {
    color: var(--black);
    text-decoration: none;

    :hover h4 {
      text-decoration: underline;
    }
  }
`;

const ClassCard = ({ title, slug, days, program, price, image }) => {
  return (
    <StyledClassCard>
      <Link to={`/classes/${slug}`}>
        <GatsbyImage image={image} alt={title} />
        <h4>
          {title} ({days})
        </h4>
        <small className="program">{program}</small>
        <small>${price}</small>
      </Link>
    </StyledClassCard>
  );
};
export default ClassCard;
