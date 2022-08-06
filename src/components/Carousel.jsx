import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyledCarousel = styled.section`
  width: 100%;
  padding: 4.75rem 4rem;
  h3 {
    font-size: 2rem;
  }
  li.alice-carousel__stage-item :not(.__cloned) {
    width: auto !important;
    margin-right: 1rem;
  }
`;

const Carousel = ({ title, items }) => {
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
      <h3>{title}</h3>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoWidth
      />
    </StyledCarousel>
  );
};
export default Carousel;
