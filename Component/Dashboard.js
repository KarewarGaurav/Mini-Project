import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate =useNavigate()
    axios.defaults.withCredentials = true ;
    useEffect(()=>{
       axios.get ('http://localhost:8080/auth/verify')
       .then(res =>{
        if(res.data.status){

        }else{
            navigate('/')
        }
       })

    },[])
  return (

    <div>Dashboard</div>
  )
}

export default Dashboard