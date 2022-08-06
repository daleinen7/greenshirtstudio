import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledClassCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  min-width: 20rem;
`;

const ClassCard = ({ title, days, program, price, image }) => {
  return (
    <StyledClassCard>
      <GatsbyImage image={image} alt={title} />
      <h4>
        {title} <br />
        {days}
      </h4>
      <small>{program}</small>
      <small>${price}</small>
    </StyledClassCard>
  );
};
export default ClassCard;
