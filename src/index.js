import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // router - handles what to be rendered for a specific URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/*for react-router-dom module*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// WARNING!

// ERR_OSSL_EVP_UNSUPPORTED generally occurs when your application or one of its modules attempts to use an algorithm or key size that’s no longer allowed by default with OpenSSL 3.0.
// In other words, Node.js throws an ERR_OSSL_EVP_UNSUPPORTED error to prevent you from using a feature that OpenSSL removed for security reasons.
// Temporary Fix: 
// export NODE_OPTIONS=--openssl-legacy-provider

// Notes:
// const var_name = () => {...} // this is an anonymous function assigned to a variable
// libraries change or upgrade frequently in react, must update syntax and patterns when they do

reportWebVitals();
