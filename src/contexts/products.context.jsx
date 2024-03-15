import React, { createContext, useState } from "react"; // 1---when using context must always import this   2---context value   3---context provider
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
    products: [],
    
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}