import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { concatenateName, dashToSlash } from '../utils/utils';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledBlogPost = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.6875rem auto;
  padding: 0 4rem;
  margin-bottom: 4.75rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 0.375rem;
    line-height: 4.875rem;
    font-family: 'Zona Pro', serif;
    font-weight: 800;
    font-size: 3.75rem;
    text-align: center;
  }

  .author-date {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .content {
    max-width: 40rem;

    h3,
    h4 {
      margin-bottom: 1.5rem;
      line-height: 2.625rem;
      font-size: 1.75rem;
      font-weight: 300;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1.5rem;
      line-height: 1.857rem;
    }
  }
`;

const BlogPostPage = ({ pageContext }) => {
  return (
    <Layout>
      <StyledBlogPost>
        <header>
          <h2>{pageContext.title}</h2>
          <div className="author-date">
            <Link to={`/${pageContext.author.slug}`}>
              {concatenateName(
                pageContext.author.name,
                pageContext.author.lastName
              )}
            </Link>
            {pageContext.date && ` | ${dashToSlash(pageContext.date)}`}
          </div>
        </header>
        {pageContext.coverImage && (
          <GatsbyImage image={pageContext.coverImage.gatsbyImageData} />
        )}
        {pageContext.content && (
          <div className="content">
            {documentToReactComponents(JSON.parse(pageContext.content.raw))}
          </div>
        )}
      </StyledBlogPost>
    </Layout>
  );
};
export default BlogPostPage;

export const Head = ({ pageContext }) => (
  <SEO title={`${pageContext.title} - Green Shirt Studio`} />
);
