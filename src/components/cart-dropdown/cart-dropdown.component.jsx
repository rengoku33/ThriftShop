import React,{ useContext } from "react";
import { useNavigate } from "react-router-dom";     // a un-common hook which will get us a navigate function
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}         {/*iterate through and pass it to cart item*/}
            </div>
            <Button onClick={goToCheckoutHandler}>Go to CheckOut</Button>
        </div>
    )
}

export default CartDropdown;