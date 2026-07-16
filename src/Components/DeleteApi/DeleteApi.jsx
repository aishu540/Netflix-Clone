import { Button, Form, Input } from 'antd'
import axios from 'axios'
import React from 'react'

const DeleteApi = () => {
    const handleDelete= async (values)=>{
        try{
            const response=await axios.delete(`https://dummyjson.com/users/${values.id}`)
            console.log(response.data)
        }
        catch(error){
            console.log(error.message)
        }
    }
  return (
    <Form onFinish={handleDelete}>
        <Form.Item label="Student ID" name="id">
            <Input placeholder='Please enter your Id'/>
        </Form.Item>
        <Form.Item >
           
            <Button type='primary' danger htmlType='submit'>Delete</Button>
        </Form.Item>
    </Form>
  )
}

export default DeleteApi