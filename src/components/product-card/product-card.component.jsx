import React, {useContext} from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) =>{                             // fetch the json format data
    const {name, price, imageUrl} = product;                    // de-structure
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);      // declaring it here instead of inside onclick for readibility and optimization

    return (
    <div className="product-card-container">
     <img src={imageUrl} alt={`${name}`} />
     <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
     </div>
     <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>
    </div>);
};

export default ProductCard;