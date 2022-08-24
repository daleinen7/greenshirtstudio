import React from "react";
import { Link } from "gatsby";
import useWindowSize from "../lib/useWindowSize";
import styled from "styled-components";

const StyledCTACard = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.headerAlign === "left" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: ${(props) => ("left" ? "start" : "end")};

  max-width: 1440px;
  margin: 0 auto;
  padding: 4.75rem 4rem;

  .info {
    max-width: 33rem;
  }

  img.image {
    width: 63%;
    padding-left: ${(props) => (props.headerAlign === "left" ? "2rem" : "0")};
    padding-right: ${(props) => (props.headerAlign === "left" ? "0" : "2rem")};
  }

  h3 {
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    margin-bottom: 3rem;
  }

  a {
    font-weight: 900;
    color: var(--black);
    background: var(--neon-green);
    text-decoration: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    border: 2px solid var(--neon-green);
    :hover {
      background: var(--white);
    }
  }

  @media (max-width: 785px) {
    flex-direction: column-reverse;
    padding: 1.875rem 0;

    img.image {
      width: 100%;
      padding: 0;
    }

    .info {
      width: 100%;
      padding: 1.25rem 1rem 0;
    }
  }
`;

const CTACard = ({
  headerAlign,
  title,
  image,
  imageAltText,
  info,
  ctaText,
  ctaLink,
}) => {
  const size = useWindowSize();

  return (
    <StyledCTACard headerAlign={headerAlign}>
      <div className="info">
        <h3>{title}</h3>
        <p>{info}</p>
        <Link to={ctaLink}>
          {size.width < 915 && size.width > 785 ? "Learn More" : ctaText}
        </Link>
      </div>
      <img src={image} alt={imageAltText} className={"image"} />
    </StyledCTACard>
  );
};
export default CTACard;
