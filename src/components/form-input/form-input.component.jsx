import React from "react";
import "./form-input.styles.scss";
// we need 2 forms, 1 for signup and other for sign in

const FormInput = ({label, ...otherProps}) => {  // modifying form tag in signup-form-component.jsx
    return(
        <div className="group">
        
            <input className="form-input" {...otherProps} /> 

            {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> )}
            {/*if label exists then render the label next to && */}
            {/*if length value is true the trigger shrink class,  and add form-input-label class by default */}
               
        </div>
    )
}

export default FormInput;