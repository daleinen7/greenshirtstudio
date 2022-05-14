import React from "react";
import styled from "styled-components";

const StyledContentCard = styled.div`
  max-width: 416px;
`;

const ContentCard = ({ title, content, image, altText }) => {
  return (
    <StyledContentCard>
      <img src={image} alt={altText} />
      <h4>{title}</h4>
      <p>{content}</p>
    </StyledContentCard>
  );
};
export default ContentCard;
