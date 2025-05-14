import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteStudent = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        axios.delete("http://localhost:3001/student/studentss/"+id)
        .then(res=>{
            if(res.data.deleted){
                navigate('/dashboard') 
            }
        }).catch(err=>console.log(err))
      }, [])
}

export default DeleteStudent
