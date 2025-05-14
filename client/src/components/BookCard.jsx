import React from 'react'
import {Link} from 'react-router-dom'
const BookCard = ({book,role}) => {
    const{bookname,author,isbn,category,image} =book;
  return (
    <div className='book-card'>
      <img src={image} alt={bookname} className='book-image'/>
        <div className="book-details">
            <h3>Bookname:{bookname}</h3>
            <p>Author:{author}</p>
            <p>ISBN:{isbn}</p>
            <p>Category:{category}</p>
        </div>
        {role === "admin" &&
        <div className="book-actions">
            <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
            <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
        </div>}
        {role===" student" || role===""&& 
        <div className="book-actions">
            <button><Link to={`/borrowbook`}>Borrow</Link></button>
        </div>}
    </div>
  )
}

export default BookCard