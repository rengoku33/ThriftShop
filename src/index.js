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

reportWebVitals();
