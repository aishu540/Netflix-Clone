import { Button, Form, Input, Popconfirm, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(null);
  const [loading,setLoading]=useState(false)
  const [form] = Form.useForm();
  const [search,setSearch]=useState("")
  function handleEdit(record) {
    setStudentId(record.id);
    form.setFieldsValue({
      firstName: record.firstName,
      email: record.email,
    });
  }

  const handleSubmit = async (values) => {

    if (studentId) {
    try{  const response = await axios.put(
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
    }
    catch(error){
      console.log(error.message)
    }

    } else {
     try{ const response = await axios.post(
        "https://dummyjson.com/users/add",

        values,
      );
      setStudents([...students, response.data]);
    }
    catch(error){
      console.log(error.message)
    }
  }
  };

 const handleDelete=async(id)=>{
  setLoading(true)
   try{ const response=await axios.delete(`https://dummyjson.com/users/${id}`) 
    
   setStudents((prevStudents)=>
    
    prevStudents.filter((student)=>(
      student.id!==id
    ))
    )
  }
  catch(error){
    console.log(error.message)
  }
  finally{
    setLoading(false)
  }
 }
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
  const filteredStudents=students.filter((student)=>(
    student.firstName.toLowerCase().includes(search.toLowerCase())
  ))

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
          <Popconfirm
           
           title="Delete Student"
             description="Are you sure you want to delete this student"
             okText="Yes"
             cancelText="No"
             onConfirm={()=>handleDelete(record.id)}
          >
          <Button>Delete</Button>
          </Popconfirm>
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
      <Input.Search enterButton="Search"  onSearch={(value)=>setSearch(value)}/>
      <Table columns={columns} dataSource={filteredStudents} loading={loading} rowKey="id" pagination={{pageSize:4}} />
    </div>
  );
};

export default UserDetails;
