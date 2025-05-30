import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const logout = (setRole) => {
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3001/auth/logout")
    .then(res=>{
        if(res.data.logout){
            setRole('')
            navigate('/') 
        }
    }).catch(err=>console.log(err))
  },[])
}

export default logout
