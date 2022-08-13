import React from "react";
import HeadingEffect from "./HeadingEffect";
import styled from "styled-components";

const StyledImageAndContent = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 90rem;
  margin: 0 auto;

  align-items: center;

  h2 {
    font-size: 3.75rem;
    line-height: 4.875rem;
  }

  img {
    width: 50%;
    padding: 0 0 2rem 2rem;
  }

  .info {
    padding: 0 2.25rem 0 4rem;
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
        <HeadingEffect text={title} />
        <p>{content}</p>
      </div>
      <img src={image} alt={title} />
    </StyledImageAndContent>
  );
};
export default ImageAndContentHeader;
