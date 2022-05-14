import React from "react";
import styled from "styled-components";

const StyledImageAndContent = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;

  align-items: center;

  h2 {
    font-size: 3.75rem;
    line-height: 4.875rem;
  }

  img {
    width: 50%;
  }

  .info {
    padding-right: 2.25rem;
    width: 50%;

    p {
      line-height: 1.875rem;
    }
  }
`;

const ImageAndContentHeader = ({ title, content, image }) => {
  return (
    <StyledImageAndContent>
      <div className="info">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={image} alt={title} />
    </StyledImageAndContent>
  );
};
export default ImageAndContentHeader;
