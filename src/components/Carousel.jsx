import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const StyledCarousel = styled.section``;

const Carousel = ({ title }) => {
  const items = [
    <p>This is slide 1</p>,
    <p>This is slide 2</p>,
    <p>This is slide 3</p>,
  ];
  return (
    <StyledCarousel>
      <h3>{title}</h3>
      <AliceCarousel mouseTracking items={items} />
    </StyledCarousel>
  );
};
export default Carousel;
