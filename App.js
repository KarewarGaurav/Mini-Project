import React from 'react';
import RegistrationForm from './Component/RegistrationForm' // Import your RegistrationForm component
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Component/Login';
import Home from './Component/Home';
import ForgotPassword from './Component/ForgotPassword';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element = {<RegistrationForm/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/forgotpassword' element = {<ForgotPassword/>}></Route>
      <Route path='/dashboard' element = {<Dashboard/>}></Route>
      
      
      </Routes>
    </Router>
  );
}

export default App;




