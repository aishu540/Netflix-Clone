import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetails = () => {
  const navigate=useNavigate()
    const {id}=useParams()
  return (
    <div>
    <div>Student ID:{id}</div>
   
    <Button onClick={()=>navigate("/")}>Back</Button>
    </div>
  )
}

export default StudentDetails