import React from "react";
import "./button.styles.scss";
/* 
we are using 3 types of buttons
1. default
2. inverted
3. google sign in
 */

const BUTTON_TYPE_CLASSES ={      // switch button classes based on button
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({ children, buttonType, ...otherProps }) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;