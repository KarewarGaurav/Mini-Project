import React, { useState } from 'react';
import '../Component/Style.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate()
   
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/login', { email, password }).then(response =>{
      console.log("Response received:", response); 
        navigate('/home')
       // console.log(response)
    }).catch(err =>{
      console.error("Error in login api:", err.toJSON());
        })
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p>
              Forgot Password <a href="/">Click Here!</a>
            </p>
            <p>Don,tHave an Account <Link to="/">Sign up</Link></p>
          </div>
          <div className="btn">
            <button type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
