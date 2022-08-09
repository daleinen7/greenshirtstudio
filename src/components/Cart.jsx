import React from "react";
import cart from "../images/cart.svg";
import styled from "styled-components";

const StyledCart = styled.button`
  display: flex;
  align-items: center;
  color: var(--black);
  position: relative;
  border: none;
  background: none;
  cursor: pointer;

  img {
    margin-right: 0.3rem;
  }
`;

const Cart = () => {
  return (
    <StyledCart>
      <img src={cart} alt="cart" height="14" width="14.5" />
      Cart
    </StyledCart>
  );
};
export default Cart;
