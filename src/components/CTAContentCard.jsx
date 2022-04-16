import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledCTACard = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.headerAlign === "left" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  padding: 4.75rem 4rem;

  img.image {
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
    margin-bottom: 1.25rem;
  }

  a {
    font-weight: 900;
    color: var(--green);
    font-size: 1.25rem;
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
  return (
    <StyledCTACard headerAlign={headerAlign}>
      <div className="info">
        <h3>{title}</h3>
        <p>{info}</p>
        <Link to={ctaLink}>{ctaText}</Link>
      </div>
      <img src={image} alt={imageAltText} className={"image"} />
    </StyledCTACard>
  );
};
export default CTACard;
