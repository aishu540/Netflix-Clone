import { Form, Input } from 'antd'
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const GetApi = () => {
    const [student,setStudent]=useState([])
 
    
    const onSearch= async (value)=>{
          try{
            // const response= await axios.get(`https://dummyjson.com/users?q=${value}`
               
            // )
            const response = await axios.get(
  "https://dummyjson.com/users/search",{
         params:{
             q:value
            },
  }
  // "https://dummyjson.com/users"
);
        setStudent(response.data.users)   
            // console.log(response.data)
          // const  allStudents=response.data.users;
          //   const filteredStudent=allStudents.filter((student)=>(
          //     student.address.city.toLowerCase().includes(value.toLowerCase())
          //   ))

          //   setStudent(filteredStudent)
          }
          catch(error){
            console.log(error.message)
          }
    }
  return (
    <div>
        <Form>
            <Form.Item>
                <Input.Search enterButton="Search" onSearch={onSearch} placeholder="Search by ID"/>
            </Form.Item>
           
            {
              student && (
                student.map((student)=>(
                
                    <div key={student.id}>
                    
                    <p><b>Name</b>:{student.firstName}</p>
                    <p><b>Id</b>:{student.id}</p>
                    <p><b>City</b>:{student.address.city}</p>
                   </div>
                ))
              )      
            }
        </Form>
    </div>
  )
}

export default GetApi