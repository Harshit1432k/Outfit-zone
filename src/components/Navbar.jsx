import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "../css/Navbar.jsx";
import { LogoContainer, NavigationContainer, NavLink,NavLinks } from "../css/Navbar.jsx";
import { signOutUser } from "../utils/firebase.utils";
import CartDropdown from "./CartDropdown";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
        <h1 className="logo">Outfit Zone</h1>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span'  onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
