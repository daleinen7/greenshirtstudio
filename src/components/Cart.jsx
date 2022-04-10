import React from "react";
import cart from "../images/cart.svg";
import styled from "styled-components";

const StyledCart = styled.div`
  display: flex;
  color: var(--white);
  position: relative;
`;

const Cart = () => {
  return (
    <StyledCart>
      <img src={cart} alt="cart" height="14" width="14.5" />
      <small>Cart</small>
    </StyledCart>
  );
};
export default Cart;
