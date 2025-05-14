import React, {  useEffect, useState  } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const EditStudent = () => {
    const [roll, setRoll]=useState('')
    const [username, setUsername]=useState('')
    const [year, setYear]=useState('')
    const {id} = useParams()

    useEffect(()=>{
      axios.get('http://localhost:3001/student/studentss/'+id)
        .then(res=>{console.log(res)
          setUsername(res.data.username)
          setRoll(res.data.roll)
          setYear(res.data.year)
        }).catch(err =>console.log(err))
    }, [])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3001/student/studentss/'+id,{username,roll,year})
        .then(res=>{console.log(res)
        }).catch(err =>console.log(err))
    }
  return (
    <div className='login-page'>
        <div className="login-container" >
        <form className='student-form' onSubmit={handleSubmit}>
        <h2>EDIT STUDENTS</h2>
        <div className="form-group">
          <label htmlFor="username">User name:</label>
          <input type="text" placeholder='Enter Username' id='username' name='username' value={username}
           onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="roll">Roll:</label>
          <input type="text" placeholder='roll' id='roll' name='roll' value={roll}
           onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="year">YEAR:</label>
          <input type="text" placeholder='year' id='year' name='year' value={year}
           onChange={(e) => setYear(e.target.value)}/>
        </div>
        <button type='submit' class="cssbuttons-io-button">
       Update
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

export default EditStudent
