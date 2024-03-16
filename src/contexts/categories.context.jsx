import React, { createContext, useState, useEffect } from "react"; // 1---when using context must always import this   2---context value   3---context provider
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

export const categoriesContext = createContext({
    categoriesMap: {},
    
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        // proper way to pass an async function in useEffect    
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();   
    }, []);

    const value = {categoriesMap};
    return (
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    )
}