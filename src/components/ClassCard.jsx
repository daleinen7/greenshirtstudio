import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledClassCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  min-width: 20rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 1.625rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  small {
    font-size: 1rem;
    line-height: 1.3rem;
    color: var(--black);
  }

  img {
    border: 1px solid var(--light-gray);
  }

  .program {
    color: var(--dark-gray);
  }

  a {
    color: var(--black);
    text-decoration: none;

    :hover h4 {
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

const ClassCard = ({
  title,
  slug,
  days,
  program,
  price,
  image,
  imgUrl,
  headshot,
}) => {
  return (
    <StyledClassCard>
      <Link to={headshot ? `/headshot/${slug}` : `/classes/${slug}`}>
        {image ? (
          <GatsbyImage image={image} alt={title} />
        ) : imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : (
          <div className="image-stand-in"></div>
        )}
        <h4>
          {title} {days && `(${days})`}
        </h4>
        <small className="program">{program}</small>
        <br />
        {price > 0 ? <small>${price}</small> : <small>Free / Donation</small>}
      </Link>
    </StyledClassCard>
  );
};
export default ClassCard;
