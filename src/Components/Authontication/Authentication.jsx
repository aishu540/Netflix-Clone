import React from "react";
import api from "../../services/api";
import { endpoint } from "../../services/endpoint";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
const Authentication = () => {
    const navigate=useNavigate()
   const handleSubmit=async (values)=>{
    // try{    const response=await api.post(endpoint.auth.login,values)
    //     localStorage.setItem("token",response.data.accessToken) 
   
    //       navigate("/dashboard")
    // }
    try{
        const response=await api.post(endpoint.auth.register)
        console.log(response.data.message)
    }

    catch(error){

        console.log(error.message)
    }
}
  return (
   
   <Form  layout="vertical" onFinish={handleSubmit}>
      {/* <Form.Item label="UserName" name="username"> */}
      <Form.Item label="Name" name="firstname">
        <Input placeholder="Please Enter your name" />
      </Form.Item>

      {/* <Form.Item label="Password" name="password"> */}
      <Form.Item label="Email" name="email">
        {/* <Input.Password placeholder="Please enter your Email" /> */}
        <Input placeholder="Please enter your Email" />
      </Form.Item>
      {/* <Form.Item>
        <Button type="primary" htmlType="submit">login</Button>
      </Form.Item> */}
      <Form.Item>
     
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
};

export default Authentication;
