import { Button } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const StudentDetails = () => {
  const navigate=useNavigate()
  const [students,setStudents]=useState({})
  const location=useLocation()
  console.log(location)
    const {id}=useParams()
     const fetchStudents = async () => {
    try {
   
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      setStudents(response.data);
  
    } catch (error) {
      console.log(error.message);
    }
   
  };
  useEffect(() => {
  
    fetchStudents();
  }, [id]);
  return (
    <div>
     <h1>Student Name:{students?.firstName}</h1>
     <h2>Email:{students?.email}</h2>
   
   <div>Student ID?:{id}</div>
   
    <Button onClick={()=>navigate("/")}>Back</Button>
    </div>
  )
}

export default StudentDetails