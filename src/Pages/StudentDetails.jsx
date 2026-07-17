import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
    const {id}=useParams()
  return (
    <div>Student ID:{id}</div>
  )
}

export default StudentDetails