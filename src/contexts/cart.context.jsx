import React,{ createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems array contains productToAdd
    // if found, increment... return new array with modified cartItems/ new cart item
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // case: existing cart item found
    // iterate through all cart items and when the id match, increment the quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id===productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem);
    }

    // case: new product
    // if every element in cartItems doesnt have an existing cart item with the same id as productToAdd, then new product
    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},                        // variable pointing to an empty function
    cartItems: [],                                  // modified cart context to store cart items once a user adds to cart
    addItemToCart: () => {}
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // a function which is triggered whenever a user clicks add to cart button
    // based on productToAdd, we must decide to either add new cart item or increment count
    const addItemToCart = (productToAdd) => {       
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};