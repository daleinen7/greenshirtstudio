import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const StyledAboutPhotographer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 2px solid var(--light-gray);
  border-radius: 2px;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: 'Lato', sans-serif;
  }

  img {
    margin-bottom: 1rem;
  }

  .bio {
    margin-bottom: 1rem;

    p {
      line-height: 1.5rem;
      margin-top: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    a {
      padding: 0 !important;
      margin-top: 0 !important;
      border: none !important;
      color: var(--black);

      :hover {
        color: var(--neon-green);
      }
    }
  }

  .learn-more {
    margin-top: 1.5rem;
    margin-bottom: 1.25rem;
    border: 2px solid var(--black);
    color: var(--black);
    border-radius: 2px;
    display: inline;
    text-decoration: none;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

    :hover {
      background: var(--light-gray);
      border: 2px solid var(--light-gray);
    }
    :active {
      transform: translateY(2px) translateX(2px);
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      min-width: auto;
    }
  }
`;

const AboutPhotographer = ({ name, bio, image, link }) => {
  return (
    <StyledAboutPhotographer>
      <img src={image[0].url} alt={name} />
      <h3>About the Photographer</h3>
      <div className="bio">
        <Markdown>{bio}</Markdown>
      </div>
      <a href={link} className="learn-more ">{`About ${name}`}</a>
    </StyledAboutPhotographer>
  );
};
export default AboutPhotographer;
