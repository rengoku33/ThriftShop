import React,{createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";

// actual value of context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// provider of context
// on every context that gets build, there is a providor
// a providor is a component that will wrap around any other components that will require the values present in a particular context
export const UserProvider = ({children}) => {
    // this providor in allowing any of its child components to access the values inside the useState
    // children prop here refers to components, could be app, signin etc,.

    // we are storing the user object, which contains user data
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    useEffect(() => {
        const unsubsctibe = onAuthStateChangedListener((user) => {

            // create user document only when user comes through
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user); 
        })
        // receives some kind of callback function and passes the callback function to onAuthStateChanged
        // onAuthStateChanged will call that callback whenever authentication state (auth singleton) changes
        // permanantly open listener -> from the moment we set it, its always waiting to get invoked
        // so we must set it to stop listening whenever the component unmounts
        return unsubsctibe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>     
    
}

// import (provider) in index.js and enclose the app with the providor component
// so, we set it up to a parent level component which gives us access to any componenet inside

// import (context) in the required component (ex: used cart-context in navigation component)