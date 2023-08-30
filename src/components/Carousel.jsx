import React from 'react';
import { Link } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';

const StyledCarousel = styled.section`
  width: 100%;
  padding: 4.75rem 4rem;
  max-width: 90rem;
  overflow-x: hidden;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  a[role='button'] {
    font-weight: 900;
    color: var(--black);
    background: var(--neon-green);
    text-decoration: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    width: fit-content;
    display: block;
    margin: auto;
    border: 2px solid var(--neon-green);
    :hover {
      background: var(--white);
    }

    :active {
      transform: translateY(2px) translateX(2px);
    }
  }

  .alice-carousel {
    margin-bottom: 40px;
  }
  .alice-carousel__stage {
    display: flex;
    gap: 32px;
  }
  li.alice-carousel__stage-item {
    min-width: 300px !important;
  }
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    color: var(--black);
    background-color: var(--neon-green);
  }
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: 40px;
    position: absolute;
    top: -60px;
  }
  .alice-carousel__prev-btn {
    right: 50px;
  }
  .alice-carousel__next-btn {
    right: 0px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;

    padding: 4.75rem 1rem;

    a[role='button'] {
      margin: 0;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    h3 {
      padding-bottom: 3rem;
    }
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      top: -72px;
    }
    .alice-carousel__prev-btn {
      left: 0px;
    }
    .alice-carousel__next-btn {
      left: 50px;
    }
  }
`;

const Carousel = ({ title, items, link, linkDisplay }) => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  };

  return (
    <StyledCarousel>
      {title && <h3>{title}</h3>}
      <AliceCarousel
        disableDotsControls
        mouseTracking
        items={items}
        infinite
        responsive={responsive}
        autoWidth
      />
      {link && (
        <Link role="button" to={`/${link}`}>
          {linkDisplay}
        </Link>
      )}
    </StyledCarousel>
  );
};
export default Carousel;
