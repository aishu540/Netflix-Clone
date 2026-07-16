import { Button, Form, Input, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [students, setStudents] = useState([]);

  const [form] = Form.useForm();
  const handleAdd = async (values) => {
    const response = await axios.post(
     
        "https://dummyjson.com/users/add",

      values,
    );
    setStudents([...students,response.data])
  };
  const fetchStudents = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setStudents(response.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",

      dataIndex: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleAdd}>
        <Form.Item label="Name" name="firstName">
         
          <Input placeholder="Please Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Please enter your Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
          
            Add Student
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={students} rowKey="id" />
    </div>
  );
};

export default UserDetails;
