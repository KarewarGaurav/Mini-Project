import React, { useState } from 'react';
import '../Component/Style.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate()
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/signup', { username, email, password }).then(response =>{
      if(response.data.status){
        navigate('/login')
      }
       // console.log(response)
    }).catch(err =>{
      console.log(err.toJSON())
    })

  };

  return (
    <div className="container">
      <div className="box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {!isSignIn && (
              <div className="input-field name-field">
                <i className="fa-solid fa-user-secret"></i>
                <input type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
              </div>
            )}
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p>
              Lost Password <a href="forgotpassword">Click Here!</a>
            </p>
            <p>Have an Account <Link to="/login">Login</Link></p>
          </div>
          <div className="btn">
            <button type="submit"  onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
