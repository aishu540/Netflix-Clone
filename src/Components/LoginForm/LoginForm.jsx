import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const PracticeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
// the form is created
  const addStudent = async () => {
    try {
     
        const students = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: name,
          email: email,
        },
      );
     console.log(students.data)
    } catch (error) {
        console.log(error.message)
    }
  };

  return (
    <div>
      <Form onFinish={addStudent}>
        <Form.Item label="Name" type="text">
          <Input placeholder="Please enter your name" onChange={(e)=>setName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Email" type="email">
          <Input placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PracticeForm;
