import React from "react";
import styled from "styled-components";

const StyledClassCard = styled.article``;

const ClassCard = ({ title, days, program, price }) => {
  return (
    <StyledClassCard>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>
        {title} <br />
        {days}
      </h4>
      <small>{program}</small>
      <small>{price}</small>
    </StyledClassCard>
  );
};
export default ClassCard;
