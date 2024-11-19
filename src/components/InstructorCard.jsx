import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledInstructorCard = styled.article`
  max-width: 19rem;
  width: 100%;

  h3 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 900;
    text-align: left;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-family: 'Lato', sans-serif;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    height: 13.25rem;

    img {
      object-fit: cover;
      border: 1px solid var(--light-gray);
      width: 19rem;
      margin-bottom: 0.5rem;
    }
  }

  small {
    font-size: 16px;
    color: var(--dark-gray);
  }

  a {
    color: var(--black);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const InstructorCard = ({ instructor, position, img, slug }) => {
  return (
    <StyledInstructorCard>
      <Link to={`/${slug}`}>
        {img && (
          <div className="image-wrapper">
            {img && <GatsbyImage image={img} alt={instructor} />}
          </div>
        )}
      </Link>
      <h3>
        <Link to={`/${slug}`}>{instructor}</Link>
      </h3>
      <small>{position}</small>
    </StyledInstructorCard>
  );
};
export default InstructorCard;
