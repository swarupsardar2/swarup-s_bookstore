import React, { useState } from 'react'
import axios from 'axios'

const AddAdmin = () => {
    const [id, setId]=useState('')
    const [adminname, setAdminname]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/admin2/register',{id,adminname,email,phone,password})
        .then(res=>{console.log(res)
            /*if(res.data.login && res.data.role ==='admin'){
                navigate('/dashboard')
            }*/
        }).catch(err =>console.log(err))
    }
return (
<div className='student-form-container'>
    <form className='student-form' onSubmit={handleSubmit}>
        <h2>Add Admin</h2>
        <div className='form-group'>
            <label htmlFor='Id'>Admin Id:</label>
            <input type='text' id='id' name='id'
            onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='adminname'>Admin Name:</label>
            <input type='text' id='adminname' name='adminname'
            onChange={(e) => setAdminname(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email'
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='phone'>Phone :</label>
            <input type='text' id='phone' name='phone'
            onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password'
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Register</button>
     </form>
  </div>
    
  )
}

export default AddAdmin
