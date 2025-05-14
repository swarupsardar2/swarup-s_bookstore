import React, {useState,useEffect} from 'react'
import axios from 'axios'
import DashCard from './DashCard'
import '../css/Dash.css'

const Dashboard = () => {
  const[studentss,setStudents]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/student/students')
    .then(res=>{
      setStudents(res.data)
      console.log(res.data)
    }).catch(err =>console.log(err))
  } , [])

  
    return(
        <div className='Dash-list'> 
        {
        studentss.map(studentss=>{
          return <DashCard key={studentss.id} studentss={studentss} ></DashCard>
        })
      }
        </div>
    );
}
export default Dashboard

