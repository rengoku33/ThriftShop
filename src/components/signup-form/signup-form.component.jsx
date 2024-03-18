import React, { useState } from "react";
import { createAuthUserWithEmailAndPass, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./signup-form.styles.scss";

const defaultFormFields = {                                                 // assigning default values for the input fields
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);        // passing the default valuse to the useState hook and form
    const { displayName, email, password, confirmPassword } = formFields;   // destructuring the default values passed
    //console.log(formFields);                                              uncomment to check how the event works

    const resetFormFields = () => {
        setFormFields(defaultFormFields);   // reset the form fields once submitted
    }

    const handleChange = (event) => {       // function gets triggered everytime user changes value in field
                                            // we will utilize the name attribute in form tag to tell setState which field has to update    
        const {name, value} = event.target; // fetching name and value attribute through event object when onChange gets triggered
                                            // target will give us all the attributes of the element which admits the event (input field)
        setFormFields({...formFields, [name]: value}) // spread all of the fields and update only the appropriate field
    };

    const handleSubmit = async (event) => {
        event.preventDefault();             // prevent default behaviour of the form

        if(password.length<7){   // check if pass and confirm matches
            alert("passwords must be 7 characters or more");
            return;
        }   

        if(password !== confirmPassword){   // check if pass and confirm matches
            alert("passwords does not match");
            return;
        }
        
              // create user document 
        try{  // sometimes when we try and call our firebase server, we might fail. so we must catch that error
            const {user} = await createAuthUserWithEmailAndPass(email,password);

              // lets now pass in the user object to createUserDocumentFromAuth method variable at firebase.util.js
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

            alert("welcome "+displayName+", Sign-up successful")
            window.location = "/";


        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use');
            }else{
                console.log('user creation encountered an error',error);
            }
        }

    }
              // replaced form tags with FormInput component
    return(
        <div className="sign-up-container">  
            <h2>Don't have an account?</h2>
            <span>sign up with email and pass</span>
            <form onSubmit={handleSubmit}>
                <FormInput label= "Display Name"
                 type="text" onChange={handleChange} name="displayName" value={displayName} required/> 

                <FormInput label= "Email"
                 type="email" onChange={handleChange} name="email" value={email} required/>

                <FormInput label= "Password"
                 type="password" onChange={handleChange} name="password" value={password} required/>

                <FormInput label= "Confirm Password"
                 type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

                <Button type="submit">Sign Up</Button> {/*default button style (1/3)*/}
            </form>
        </div>
    );
};

export default SignUpForm;