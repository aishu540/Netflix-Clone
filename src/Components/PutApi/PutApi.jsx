import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";

const PutApi = () => {
  const handleupdate = async (values) => {
    try {
      const response = await axios.put("https://dummyjson.com/users/2", values);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Form onFinish={handleupdate}>
      <Form.Item label="Name" name="firstName">
        <Input placeholder="Please Enter your name" />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input placeholder="Please enter your Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PutApi;
