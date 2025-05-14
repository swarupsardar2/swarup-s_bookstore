import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import '../css/Search.css'
const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>College Library</Link>
        </div>
        <div className='navbar-right'>
        <div className="box-input">
        <div className="input__container">
  <div className="shadow__input"></div>
  <button className="input__button__shadow">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
      <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
    </svg>
  </button>
  <input type="text" name="text" className="input__search" placeholder="search.." />
</div>
       </div >
            <Link to="/books" className="navbar-link">Books</Link>
            {role==="admin" && <>
            <Link to="/addbook" className="navbar-link">Add Books</Link>
            <Link to="/addstudent" className="navbar-link">Add Student</Link>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <Link to="/addadmin" className="navbar-link">Add Admin</Link>
            </>
            }
            {role==="student" || role==="" ?           
            <Link to="/login" className="navbar-link">Login</Link> 
            :<Link to="/logout" className="navbar-link">Logout</Link>
          }
            
        </div>
    </nav>
  )
}

export default Navbar
