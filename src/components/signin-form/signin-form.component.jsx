import React, { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPass } from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./signin-form.styles.scss";
// ------------------------------------------copy from signup-form but altered based on need------------------------------------------------
// for more information on how this works, refer to the OG file
const defaultFormFields = {                                                
    email: '',
    password: '',
}

const SignInForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields);       
    const { email, password } = formFields;                                 
    
    const signInWithGoogle = async () => {    
        signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields); 
    }

    const handleChange = (event) => { 
        const {name, value} = event.target;                                     
        setFormFields({...formFields, [name]: value}) 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();     

  
              
        try{  
            await signInAuthUserWithEmailAndPass(email, password);
            // whenever a user signs in, automatically send the data to the context, because we got onAuthStateChangedListener

            resetFormFields();

        }catch(error){

            switch(error.code){

                case "auth/invalid-credential":
                    alert('either email or pass is incorrect, try again mate');
                    break;
                default:
                    console.log(error);
            }
            
        }

    }
 // replaced form tags with FormInput component
    return(
        <div className="sign-up-container">  
            <h2>Already have an account?</h2>
            <span>sign in with email and pass</span>
            <form onSubmit={handleSubmit}>
                <FormInput label= "Email"
                 type="email" onChange={handleChange} name="email" value={email} required/>

                <FormInput label= "Password"
                 type="password" onChange={handleChange} name="password" value={password} required/>

                <div className="buttons-container"> 
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;