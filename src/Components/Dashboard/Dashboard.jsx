import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../services/endpoint";
import api from "../../services/api";
const Dashboard = () => {
    const navigate=useNavigate()
 
  const handleLogout=async ()=>{
  // try{    await api.post(endpoint.auth.logout)

     
      
   
  // }
  // catch(error){
  //   console.log(error.message)
  // }
  localStorage.removeItem("token")

     localStorage.removeItem("role")
      navigate("/login")
    }
  return (
   
   <div>
      <div>Dashboard</div>
   <Button type="primary" onClick={handleLogout}>Logout</Button>
    </div>
  );

};

export default Dashboard;
