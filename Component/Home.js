import React from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios'


function Home() {
  const navigate = useNavigate()
  const handleLogout = () =>{
     axios.get('http://localhost:8080/auth/logout')
     .then(res =>{
      if (res.data.status){
        navigate('/login')
      }
     }).catch(err =>{
      console.log(err);
     })
  }
  return (
    <div>Home
      <br />
      <button> <Link to='/dashboard'>Dashboard</Link> </button>
      <br />
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Home