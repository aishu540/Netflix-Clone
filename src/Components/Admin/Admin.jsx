import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admin= () => {
    const navigate=useNavigate()
 
    function handleLogout(){
     localStorage.removeItem("token")
     localStorage.removeItem("role")
    navigate("/login")
    }
  return (
   
   <div>
      <div>Admin</div>
   <Button type="primary" onClick={handleLogout}>Logout</Button>
    </div>
  );

};

export default Admin;
