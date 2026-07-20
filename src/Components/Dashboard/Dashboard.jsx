import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate=useNavigate()
 
    function handleLogout(){
     sessionStorage.removeItem("token")
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
