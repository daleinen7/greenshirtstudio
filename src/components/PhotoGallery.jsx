import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  gap: 1rem;
  margin: 9.5rem 0;
  padding: 0 2rem;
  @media (max-width: 640px) {
    padding: 0 1rem;
  }
  figure {
    margin: 0;
    img {
      width: 100%;
      height: auto;
    }
    figcaption {
      font-size: 0.75rem;
      font-weight: 400;
      text-align: left;
      margin: 0.5rem 0;
    }
  }
`;

const PhotoGallery = ({ imgCap }) => {
  return (
    <StyledGallery>
      {imgCap.map((caption, index) => (
        <figure key={index}>
          <img
            src={caption.image}
            alt={caption.alt || 'photographer example'}
          />
          <figcaption>{caption.caption}</figcaption>
        </figure>
      ))}
    </StyledGallery>
  );
};
export default PhotoGallery;
