import { Button, Form, Input, message } from "antd";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const token= sessionStorage.getItem("token")
  if(token){
   return <Navigate to="/dashboard"/>
  }
 
  const handleLogin =async (values) => {
    console.log(values)
  try{  const response=await axios.post("https://dummyjson.com/auth/login",values)
    sessionStorage.setItem("token",response.data.accessToken)
    
    if(response.data.username==="emilys"){
       sessionStorage.setItem("role","admin")
      navigate("/admin")
    }
    else{
        sessionStorage.setItem("role","user")
      navigate("/dashboard")
    }
  }
  catch(error){
    console.log(error.message)
  }

    // if(
    //     values.username==="user" &&

    //     values.password==="aishu123"
    // ){
    //     localStorage.setItem("token", "abc54");
    //     localStorage.setItem("role","user")
    //     message.success(" user login Successful")
    //     navigate("/dashboard");
    // }
    // else if(
    //     values.username==="admin" &&

    //     values.password==="aishu123"
    // ){
    //     localStorage.setItem("token", "abc54");
    //     localStorage.setItem("role","admin")
    //     message.success(" admin login Successful")
    //     navigate("/admin");
    // }
    // else{
    //     message.error("Invalid userName or Password")
    // }
  
};


  return (
    <div>
      <h1>Login</h1>
      <Form layout="vertical" onFinish={handleLogin} >
        <Form.Item label="Username" name="username" >
          <Input autoComplete="off"/>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password autoComplete="off" />
        </Form.Item>

        <Button type="primary"  htmlType="submit">Login</Button>
      </Form>
      
    </div>
  );
};

export default LoginPage;
