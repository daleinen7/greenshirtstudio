import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import testimonails from "../lib/testimonials";
import styled from "styled-components";

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 35.875rem;

  background: var(--neon-green);

  .quote-block {
    max-width: 40rem;
    position: relative;
    padding: 3rem;
    background: var(--black);
    color: var(--black);
    transform: rotate(0deg);

    margin: 0 auto;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      transform: rotate(-4deg);
      z-index: -1;
    }
  }

  .alice-carousel {
    max-width: 90rem;
  }

  .alice-carousel__wrapper {
    overflow: visible;
  }
  .alice-carousel__dots {
    position: absolute;
    left: calc(50% - 24px); //24px is the width of all the dots
    top: 275px;
  }
  .alice-carousel__dots-item:not(.__custom) {
    width: 10px;
    height: 10px;
    background-color: var(--white);
    border: 1px solid var(--black);
    &:hover {
      background-color: var(--salmon);
    }
  }
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--black);
    &:hover {
      background-color: var(--black);
    }
  }
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    position: absolute;
    top: calc(50% - 32px);
    color: var(--neon-green);
    background: var(--black);
    &:hover {
      color: var(--salmon);
    }
  }
  .alice-carousel__next-btn-item {
    right: 64px;
  }
  .alice-carousel__prev-btn-item {
    left: 64px;
  }
  .band-aid {
    padding: 2rem;
  }

  .hack {
    overflow: hidden;
    width: 100%;
  }

  p.quote {
    font-weight: 300;
    font-size: 1.75rem;
    line-height: 2.625rem;
    padding-bottom: 1.75rem;
  }

  p.name {
    font-weight: 400;
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 4rem;
    .alice-carousel__next-btn-item {
      right: 14px;
    }
    .alice-carousel__prev-btn-item {
      left: 14px;
    }
    .alice-carousel__dots {
      top: auto;
      bottom: 15px;
    }
  }
`;

const Testimonial = () => {
  const items = testimonails.map((quote) => (
    <div className="band-aid">
      <div className="quote-block">
        <div className="quote-area">
          <p className="quote">{quote.quote}</p>
          <p className="name">{quote.name}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <StyledTestimonial>
      <div className="hack">
        <AliceCarousel mouseTracking items={items} />
      </div>
    </StyledTestimonial>
  );
};
export default Testimonial;
