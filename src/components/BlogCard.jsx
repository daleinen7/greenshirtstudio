import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledBlogCard = styled.article`
  max-width: 19rem;
  width: 100%;
  h3 {
    font-size: 1.25rem;
    line-height: 1.857rem;
    font-weight: 400;
    text-align: left;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    height: 13.25rem;

    img {
      object-fit: contain;
    }
  }
  a {
    color: var(--black);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const BlogCard = ({ title, author, img, slug }) => {
  return (
    <StyledBlogCard>
      <Link to={`${slug}`}>
        {img && (
          <div className="image-wrapper">
            <img src={img} alt={title} />
          </div>
        )}
      </Link>
      <Link to={`${slug}`}>
        <h3>{title}</h3>
      </Link>
      <small>{author}</small>
    </StyledBlogCard>
  );
};
export default BlogCard;
