import React, {  useEffect, useState  } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {
    const [bookname, setBookname]=useState('')
    const [author, setAuthor]=useState('')
    const [category, setCategory]=useState('')
    const [image, setImage]=useState('')
    const [isbn, setIsbn]=useState('')
    const {id} = useParams()

    useEffect(()=>{
      axios.get('http://localhost:3001/Books/book/'+id)
        .then(res=>{console.log(res)
          setBookname(res.data.bookname)
          setAuthor(res.data.author)
          setCategory(res.data.category)
          setImage(res.data.image)
          setIsbn(res.data.isbn)
        }).catch(err =>console.log(err))
    }, [])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3001/Books/book/'+id,{bookname,image,author,isbn,category})
        .then(res=>{console.log(res)
        }).catch(err =>console.log(err))
    }
  return (
    <div className='login-page'>
        <div className="login-container" >
        <form className='student-form' onSubmit={handleSubmit}>
        <h2>EDIT BOOKS</h2>
        <div className="form-group">
          <label htmlFor="bookname">Book name:</label>
          <input type="text" placeholder='Enter Bookname' id='bookname' name='bookname' value={bookname}
           onChange={(e) => setBookname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" placeholder='author' id='author' name='author' value={author}
           onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input type="text" placeholder='isbn' id='isbn' name='isbn' value={isbn}
           onChange={(e) => setIsbn(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Book Image URL:</label>
          <input type="text" placeholder='Enter Book-URL' id='image' name='image' value={image}
           onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category"  value={category}
           onChange={(e) => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="Makaut Organizer">Makaut Organizer</option>
            <option value="Maths">Maths</option>
            <option value="C">C</option>
            <option value="C">C#</option>
            <option value="C">C++</option>
            <option value="C">Flutter</option>
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

export default EditBook
