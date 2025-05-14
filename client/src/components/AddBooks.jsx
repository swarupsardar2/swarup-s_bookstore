import React, { useState } from 'react'
//import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddBooks = () => {
    const [bookname, setBookname]=useState('')
    const [isbn, setIsbn]=useState('')
    const [author, setAuthor]=useState('')
    const [image, setImage]=useState('')
    const [category, setCategory]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/Books/add',{bookname,isbn,author,image,category})
        .then(res=>{console.log(res)
        }).catch(err =>console.log(err))
    }
  return (
    <div className='login-page'>
        <div className="login-container" >
        <form className='student-form' onSubmit={handleSubmit}>
        <h2>ADD BOOKS</h2>
        <div className="form-group">
          <label htmlFor="bookname">Book name:</label>
          <input type="text" placeholder='Enter Bookname' id='bookname' name='bookname'
           onChange={(e) => setBookname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" placeholder='author' id='author' name='author'
           onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input type="text" placeholder='isbn' id='isbn' name='isbn'
           onChange={(e) => setIsbn(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Book Image URL:</label>
          <input type="text" placeholder='Enter Book-URL' id='image' name='image'
           onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" 
           onChange={(e) => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="Makaut Organizer">Makaut Organizer</option>
            <option value="Maths">Maths</option>
            <option value="C">C</option>
            <option value="Python">Python</option>
            <option value="Economics">Economics</option>
            <option value="English">English</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="DataStructure">Data Structure</option>
            <option value="Datascience">Data science</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <button type='submit' class="cssbuttons-io-button">
       Add
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

export default AddBooks
