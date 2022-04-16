import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyledCarousel = styled.section`
  padding: 4.75rem 4rem;
  h3 {
    font-size: 2rem;
  }
`;

const Carousel = ({ title, items }) => {
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

  return (
    <StyledCarousel>
      <h3>{title}</h3>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </StyledCarousel>
  );
};
export default Carousel;
