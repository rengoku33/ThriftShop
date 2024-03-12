import React from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/firebase.util";

const SignIn = () => {

    const logGoogleUser = async () => {    // whenever you call to a database, it must be asynchronous 
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    //fetch access token and then we can make CRUD requests

    return(
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    )
}

export default SignIn; 