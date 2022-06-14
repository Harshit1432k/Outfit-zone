import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "../css/CartDropdown";
import Button from "./Button";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
