import React from "react";
//import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import SignUpForm from "../../components/signup-form/signup-form.component";
import SignInForm from "../../components/signin-form/signin-form.component";
import "./authentication.styles.scss"

const Authentication = () => {
    
    // fetch access token and then we can make CRUD requests (incase signing in with google)
    return(
        <div className="authentication-container">         
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication; 