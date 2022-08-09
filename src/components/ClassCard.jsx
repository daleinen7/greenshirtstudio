import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledClassCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  min-width: 20rem;

  a {
    color: var(--black);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const ClassCard = ({ title, slug, days, program, price, image }) => {
  return (
    <StyledClassCard>
      <GatsbyImage image={image} alt={title} />
      <h4>
        <Link to={`/classes/${slug}`}>
          {title} <br />
          {days}
        </Link>
      </h4>
      <small>{program}</small>
      <small>${price}</small>
    </StyledClassCard>
  );
};
export default ClassCard;
