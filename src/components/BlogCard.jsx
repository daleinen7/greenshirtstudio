import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledBlogCard = styled.article`
  h3 {
    font-size: 1.25rem;
    line-height: 1.857rem;
    font-weight: 400;
    text-align: left;
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
      <Link to={`${slug}`}>{img && <img src={img} alt={title} />}</Link>
      <Link to={`${slug}`}>
        <h3>{title}</h3>
      </Link>
      <small>{author}</small>
    </StyledBlogCard>
  );
};
export default BlogCard;
