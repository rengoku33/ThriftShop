import React from 'react';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { Routes, Route } from "react-router-dom";


// so, based on URL we are going to switch components while persisting navbar component
const App = () => {
  return(
    <Routes>
      <Route path='/' element={<NavBar />}>      {/* parent */}         
        <Route index element={<Home />}/>         {/* child component */}
        <Route path='shop/*' element={<Shop />}/>   {/* child component but diff page/route*/} {/* represents shop component may have its own routes inside*/}
        <Route path='auth' element={<Authentication />}/> 
        <Route path='checkout' element={<Checkout />}/> 
      </Route>
    </Routes>
  )
};

export default App;
