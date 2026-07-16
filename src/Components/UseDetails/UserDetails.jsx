import { Button, Form, Input, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(null);

  const [form] = Form.useForm();

  function handleEdit(record) {
    setStudentId(record.id);
    form.setFieldsValue({
      firstName: record.firstName,
      email: record.email,
    });
  }

  const handleSubmit = async (values) => {
    if (studentId) {
      const response = await axios.put(
        `https://dummyjson.com/users/${studentId}`,
        values
      );
      setStudents((prevStudents)=>
        prevStudents.map(
          (student) =>( student.id === studentId ? response.data : student),
        ),
      );
      form.resetFields()

      setStudentId(null)

    } else {
      const response = await axios.post(
        "https://dummyjson.com/users/add",

        values,
      );
      setStudents([...students, response.data]);
    }
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
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
          <Button>Delete</Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" name="firstName">
          <Input placeholder="Please Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Please enter your Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {
              studentId ? "Update":"Add"
            }
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={students} rowKey="id" />
    </div>
  );
};

export default UserDetails;
