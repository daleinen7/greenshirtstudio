import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledEventCard = styled.article`
  max-width: ${(props) => (props.small ? '19rem' : '26rem')};
  width: 100%;

  h4 {
    font-family: 'Lato', sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 900;
    text-align: left;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  p {
    line-height: 1.875rem;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    height: 13.25rem;

    img {
      object-fit: contain;
      border: 1px solid var(--light-gray);
      width: ${(props) => (props.small ? '19rem' : '26rem')};
      margin-bottom: 0.5rem;
    }
  }

  .date,
  .time {
    color: var(--dark-gray);
  }

  .price {
    font-family: 'Lato', sans-serif;
    font-size: 1.25rem;
    font-weight: 900;
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

  @media (max-width: 500px) {
    p {
      line-height: 1.5rem;
    }
  }
`;

const EventCard = ({
  title,
  description,
  image,
  altText,
  link,
  date,
  time,
  price,
  small,
  headshot,
}) => {
  return (
    <StyledEventCard small={small}>
      {headshot ? (
        <Link to={link}>
          {image ? (
            typeof image === 'string' ? (
              <img src={image} alt={altText} />
            ) : (
              <GatsbyImage image={image} alt={title} />
            )
          ) : (
            <div className="image-stand-in"></div>
          )}
        </Link>
      ) : (
        <a href={`${link}`} target="_blank" rel="noopener noreferrer">
          {image ? (
            typeof image === 'string' ? (
              <img src={image} alt={altText} />
            ) : (
              <GatsbyImage image={image} alt={title} />
            )
          ) : (
            <div className="image-stand-in"></div>
          )}
        </a>
      )}
      <h4>
        <a href={`${link}`} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h4>
      <div className="date">{date}</div>
      {!small && (
        <>
          <div className="time">{time}</div>
          <div className="description">{description}</div>
          {price && <div className="price">${price}</div>}
        </>
      )}
    </StyledEventCard>
  );
};
export default EventCard;
