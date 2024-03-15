import React,{ createContext, useState, useEffect } from "react";

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

export const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
 
    // check if quantity == 1, if yes then remove item, so, we use filter function -> returns new array which removes whatever element matches
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem => cartItem.id!==cartItemToRemove.id); 
        // if cartItem id is not equal to the one we are trying to remove, keep the value. but if matches then remove
    }
    
    //else return back cartItems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id===cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem);

};

    //we use filter function -> returns new array which clears the matching element
export const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id!==cartItemToClear.id); 



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},                        // variable pointing to an empty function
    cartItems: [],                                  // modified cart context to store cart items once a user adds to cart
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]) ;
    // useEffect: we pass a callback which runs when dependency array changes SYNTAX: useEffect(() => {...},[dependency_array]);
    // reduce function: we pass a callback and a starting value. used to iterate through and perform a mathematical operation SYNTAX: array_name.reduce((...) => {...}, 0)

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]) ;

    // a function which is triggered whenever a user clicks add to cart button
    // based on productToAdd, we must decide to either add new cart item or increment count
    const addItemToCart = (productToAdd) => {       
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {       
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {       
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};