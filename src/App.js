import React from 'react';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component';
import SignIn from './routes/signin/signin.component';
import { Routes, Route } from "react-router-dom";


// so, based on URL we are going to switch components while persisting navbar component
const App = () => {
  return(
    <Routes>
      <Route path='/' element={<NavBar />}>      {/* parent */}         
        <Route index element={<Home />}/>         {/* child component */}
        <Route path='shop' element={<NavBar />}/>   {/* child component but diff page*/}
        <Route path='signin' element={<SignIn />}/>   {/* child component but diff page*/}
      </Route>
    </Routes>
  )
};

export default App;
