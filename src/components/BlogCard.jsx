import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledBlogCard = styled.article`
  max-width: 19rem;
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
    height: 13.25rem;
    width: 19rem;

    img {
      object-fit: contain;
      border: 1px solid var(--light-gray);
      height: 13.25rem;
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

    :active {
      transform: translateY(2px) translateX(2px);
    }
  }
`;

const BlogCard = ({ title, author, img, slug }) => {
  return (
    <StyledBlogCard>
      <Link to={`${slug}`}>
        {img && (
          <div className="image-wrapper">
            <GatsbyImage image={img} alt={title} />
          </div>
        )}
      </Link>
      <h3>
        <Link to={`${slug}`}>{title}</Link>
      </h3>
      <small>{author}</small>
    </StyledBlogCard>
  );
};
export default BlogCard;
