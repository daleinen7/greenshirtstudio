import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledEventCard = styled.article`
  max-width: 19rem;
  width: 100%;

  h3 {
    font-family: "Lato", sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 900;
    text-align: left;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    height: 13.25rem;

    img {
      object-fit: contain;
      border: 1px solid var(--light-gray);
      width: 19rem;
      margin-bottom: 0.5rem;
    }
  }

  .date {
    color: var(--dark-gray);
  }

  .description {
  }

  a {
    color: var(--black);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }

    :active {
      transform: translateY(2px) translateX(2px);
    }
  }

  .image-stand-in {
    width: 304px;
    height: 212px;
  }
`;

const EventCard = ({ title, description, image, link, date }) => {
  return (
    <StyledEventCard>
      <Link to={`${link}`}>
        {image ? (
          <GatsbyImage image={image} alt={title} />
        ) : (
          <div className="image-stand-in"></div>
        )}
      </Link>
      <h3>
        <Link to={`${link}`}>{title}</Link>
      </h3>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
    </StyledEventCard>
  );
};
export default EventCard;
