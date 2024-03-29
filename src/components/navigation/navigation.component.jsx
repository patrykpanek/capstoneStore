import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.jsx'

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utlis/firebase/fireabse.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
              <NavLink  to='/shop'>
                SHOP
              </NavLink>
              {
                currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : 
                (<NavLink  to='/auth'>SIGN IN</NavLink>)
              }
              
          <CartIcon />
          </NavLinks>
          {
            isCartOpen && <CartDropdown/>
          }
            
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;