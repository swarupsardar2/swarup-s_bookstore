import React from 'react'
import {Link} from 'react-router-dom'
const DashCard = ({studentss}) => {
    const{username,roll,id,year} =studentss;
  return (
    <div className='dash-card'>
        <div className="dash-details">
            <h3>Student-name:{username}</h3>
            <p>Roll:{roll}</p>
            <p>ID:{id}</p>
            <p>YEAR:{year}</p>
        </div>
        <div className="dash-actions">
            <button><Link to={`/student/${studentss._id}`} className='btn-link'>EDIT</Link></button>
            <button><Link to={`/delete/${studentss._id}`} className='btn-link'>DELETE</Link></button>
        </div>
    </div>
  )
}

export default DashCard