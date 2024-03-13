import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/signup-form/signup-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {    // whenever you call to a database, it must be asynchronous 
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    //fetch access token and then we can make CRUD requests

    return(
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn; 