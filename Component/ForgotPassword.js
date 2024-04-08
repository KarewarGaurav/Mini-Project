import React, { useState } from 'react';
import '../Component/Style.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate()
   
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/forgotpassword', { email }).then(response =>{
      console.log("Response received:", response); 
      alert("check you email for reset password link")
        navigate('/home')
       // console.log(response)
    }).catch(err =>{
      console.error("Error in login api:", err.toJSON());
        })
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <p>Don,tHave an Account <Link to="/">Sign up</Link></p>
          </div>
          <div className="btn">
            <button type="submit">
              Send Otp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
