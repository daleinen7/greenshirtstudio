import React from "react";
import HeadingEffect from "./HeadingEffect";
import useWindowSize from "../lib/useWindowSize";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledImageAndContent = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 90rem;
  margin: 4.625rem auto;

  align-items: center;

  h2 {
    font-size: 3.75rem;
    line-height: 4.875rem;
  }

  img,
  video {
    width: 50%;
    padding: 0 0 2rem 2rem;
  }

  .info {
    padding: 0 2.25rem 0 4rem;
    width: 50%;

    p {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }

  @media (max-width: 785px) {
    flex-direction: column-reverse;

    h2 {
      font-size: 2.25rem;
    }

    img {
      width: auto;
      padding: 0;
    }

    video {
      width: 100%;
      padding: 0;
    }

    .info {
      width: auto;
      padding: 0 1rem;
    }
  }

  @media (max-width: 560px) {
    .info p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

const ImageAndContentHeader = ({ title, content, image, video }) => {
  const window = useWindowSize();
  return (
    <StyledImageAndContent>
      <div className="info">
        {window.width > 785 ? <HeadingEffect text={title} /> : <h2>{title}</h2>}
        <ReactMarkdown children={content.replace(/\n/gi, "\n &nbsp;")} />
      </div>
      {video ? (
        <video src={video} autoPlay loop muted playsInline></video>
      ) : (
        <img src={image} alt={title} />
      )}
    </StyledImageAndContent>
  );
};
export default ImageAndContentHeader;
