import { Button, Form, Input, message, Popconfirm, Table,Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [search, setSearch] = useState("");

  const [open,setOpen]=useState(false)
 
  function handleEdit(record) {
    setStudentId(record.id);
    form.setFieldsValue({
      firstName: record.firstName,
      email: record.email,
    });
    setOpen(true)
  }

  const handleSubmit = async (values) => {
    if (studentId) {
      try {
        const response = await axios.put(
          `https://dummyjson.com/users/${studentId}`,
          values,
        );
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
         
            student.id === studentId ? response.data : student,
          ),
        );
        form.resetFields();

        setStudentId(null);
        message.success("the student updated successfully")
        setOpen(false)
        
      } catch (error) {
        console.log(error.message);
    
      }
    } else {
      try {
        const response = await axios.post(
          "https://dummyjson.com/users/add",

          values,
        );
       
        setStudents([...students, response.data]);
        message.success("A new student added successfully")
        setOpen(false)
      } catch (error) {
        message.error("unable to add a student")
      }
    }
  };

  const handleDelete = async (id) => {
  
    setLoading(true);
    try {
      const response = await axios.delete(`https://dummyjson.com/users/${id}`);

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id),
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
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

  const filteredStudents = students.filter((student) =>(
    student.firstName.toLowerCase().includes(search.toLowerCase())||
     student.id.toString()===search||
     student.email.toLowerCase().includes(search.toLowerCase())
  ));

  const columns = [
    {
   
      title: "ID",
      dataIndex: "id",
      sorter:(a,b)=>a.id-b.id
    },
    {
      title: "Name",

      dataIndex: "firstName",
      sorter:(a,b)=>a.firstName.localeCompare(b.firstName)
    },
    {
      title: "Email",
      dataIndex: "email",
       sorter:(a,b)=>a.email.localeCompare(b.email)
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
            onConfirm={() => handleDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <div>
     
     <Button type="primary" onClick={()=>setOpen(true)}>{studentId ? "Update Student":"Add Student"}</Button>
     <Modal
     
     
     open={open}
     footer={null}
     title={studentId ? "Update Student":"Add Student"}
     onCancel={()=>{
    
    
      setOpen(false)
      form.resetFields()
      setStudentId(null)}
    }
     >
     
     
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" name="firstName">
          <Input placeholder="Please Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Please enter your Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {studentId ? "Update" : "Add"}
          </Button>
        </Form.Item>
      </Form>
      </Modal>
      <Input.Search
        enterButton="Search"
     
     
        value={search}


        onChange={(e)=>setSearch(e.target.value)}
        onSearch={(value) => setSearch(value)}
      />
      <Table
      
      
      columns={columns}
        dataSource={filteredStudents}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 4 }}
      />
    </div>
 

);
};

export default UserDetails;
