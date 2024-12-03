import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledBlogCardLarge = styled.article`
  max-width: 26rem;
  width: 100%;

  h3 {
    font-family: 'Lato', sans-serif;
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
    height: 18.125rem;
    border: 1px solid var(--light-gray);
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

    :active {
      transform: translateY(2px) translateX(2px);
    }
  }
`;

const BlogCardLarge = ({ title, author, img, slug }) => {
  return (
    <StyledBlogCardLarge>
      <Link to={`${slug}`}>
        {img && (
          <div className="image-wrapper">
            {img && (
              <GatsbyImage
                image={img.gatsbyImageData}
                alt={title}
                objectFit="contain"
              />
            )}
          </div>
        )}
      </Link>
      <h3>
        <Link to={`${slug}`}>{title}</Link>
      </h3>
      <small>{author}</small>
    </StyledBlogCardLarge>
  );
};
export default BlogCardLarge;
