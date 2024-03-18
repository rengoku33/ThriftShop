import React from "react";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';  
import { Outlet } from "react-router-dom";                      // outlet to persist a component // link is like an anchor tag
import { Fragment, useContext } from "react";                         // renders nothing, just to use it as a parent to enclose the code in return statement
import { ReactComponent as ThriftLogo} from '../../assets/crown.svg'  // SVG is a scalable vector (no matter how big or small, it will be crisp)
import { UserContext } from "../../contexts/user.context";            // change signin to signout once the user is signed-in by using useContext hook
import { signOutUser } from "../../utils/firebase/firebase.util";     // whenever a signed-in user clicks sign-out button, signOutHandler function gets invoked
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
   
    return (
      <Fragment> 
        <NavigationContainer>
            <LogoContainer to='/'><ThriftLogo className="logo"/></LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                {/*<NavLink to='/'>CONTACT</NavLink>*/}
                { currentUser ? 
                  (<NavLink onClick={signOutUser}>SIGN OUT</NavLink>)
                  :
                  (<NavLink to='/auth'>SIGN IN</NavLink>)
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}    {/*short circuit operator (modified AND) ->  if isCartOpen is true then execute the component*/}
        </NavigationContainer>        
        <Outlet/>
      </Fragment>
    )
  };

  export default NavBar;