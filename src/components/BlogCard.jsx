import React from "react";
import styled from "styled-components";

const StyledBlogCard = styled.article``;

const BlogCard = ({ title, author }) => {
  return (
    <StyledBlogCard>
      <img src="https://via.placeholder.com/304x212" alt="test" />
      <h4>{title}</h4>
      <small>{author}</small>
    </StyledBlogCard>
  );
};
export default BlogCard;
