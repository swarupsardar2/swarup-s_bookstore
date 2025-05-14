import React, { useState } from 'react'
import axios from 'axios'
import '../css/register.css'
import '../css/Student.css'
//import {useNavigate} from 'react-router-dom'
const AddStudent = () => {
    const [id, setId]=useState('')
    const [roll, setRoll]=useState('')
    const [username, setUsername]=useState('')
    const [year, setYear]=useState('')
    const [password, setPassword]=useState('')
   //const navigate =useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/student/register',{id,roll,username,password,year})
        .then(res=>{console.log(res)
        }).catch(err =>console.log(err))
    }
  return (
    <div className='student-form-container'>
        <div className="student-container">
        <form className='student-form' onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className='form-group'>
            <label htmlFor='id'>ID:</label>
            <input type='text' id='id' name='id' placeholder='id'
            onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='roll'>Roll No:</label>
            <input type='text' id='roll' name='roll'  placeholder='student-University-roll'
            onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='username'>User Name:</label>
            <input type='text' id='username' name='username'  placeholder='student-name'
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='year'>Year:</label>
            <input type='text' id='year' name='year'  placeholder='year'
            onChange={(e) => setYear(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password'  placeholder='password' 
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit' class="cssbuttons-io-button">
       Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

       </form>
       </div>
      </div>
  )
}

export default AddStudent

