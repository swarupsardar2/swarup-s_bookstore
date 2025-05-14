import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = ({setRole}) => {
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:3001/auth/verify')
    .then(res =>{
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole('')
      }
    }).catch(err=>console.log(err))
  },[])
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>College Library</h1>
            <p className='hero-description'>
                Browse the collection of most important 
                books for your semester.
                Also books for your placement preparation available here.
            </p>
             <Link to='/login' className='btn'> Lets go
             </Link>
                     </div>
        <div className="hero-image"></div>
        
    </div>
  )
}

export default Home