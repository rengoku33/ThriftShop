import React from "react";
import './navigation.styles.scss';  
import { Outlet, Link } from "react-router-dom"; // outlet to persist a component // link is like an anchor tag
import { Fragment } from "react"; //renders nothing, just to use it as a parent to enclose the code in return statement
import { ReactComponent as ThriftLogo} from '../../assets/crown.svg' // SVG is a scalable vector (no matter how big or small, it will be crisp)

const NavBar = () => {
  
    return (
      <Fragment> 
        <div className="navigation">
            <Link className="logo-container" to='/'> <ThriftLogo className="logo"/> </Link>
            
            <div className="links-container">
                <Link className="links" to='/shop'>SHOP</Link>
                <Link className="links" to='/'>CONTACT</Link>
                <Link className="links" to='/auth'>SIGN IN</Link>
                <Link className="links" to='/'>VIEW CART</Link>
            </div>
        </div>      
        <Outlet/>
      </Fragment>
    )
  };

  export default NavBar;