import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log(values)
    if(
        values.username==="aishwarya" &&

        values.password==="aishu123"
    ){
        localStorage.setItem("token", "abc54");
        message.success("login Successful")
        navigate("/dashboard");
    }
    else{
        message.error("Invalid userName or Password")
    }
  
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
