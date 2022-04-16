import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyledCarousel = styled.section``;

const Carousel = ({ title }) => {
  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  const items = [
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
    <article>
      <img src="https://via.placeholder.com/304x212" alt="tst" />
      <h4>Title</h4>
      <small>extra info</small>
    </article>,
  ];
  return (
    <StyledCarousel>
      <h3>{title}</h3>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </StyledCarousel>
  );
};
export default Carousel;
