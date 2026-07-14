
import axios from "axios";
import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [formData,setFormData]=useState({
    firstName:"",
    email:""
  })

  
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  useEffect(()=>{
    handleSubmit()
  },[])
  const handleSubmit=async (e)=>{
    e.preventDefault()
       try{
        const response=await axios.post("https://dummyjson.com/users/add",formData)
        setFormData({
          firstName:"",
          email:""
        })
        alert("the new data added successfully")
       }
       catch(error){
        console.log(error.message)
       }
  }
  return (
    <div>
     <form onSubmit={handleSubmit}>

      <div>
        <p>First Name:</p>
        <input type="text" placeholder="Please Enter your name" name="firstName" onChange={handleChange}/>
      </div>
      <div>
        <p>Email:</p>
        <input type="email" placeholder="Please Enter your Email" name="email" onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
     </form>
    </div>
  );
};

export default LoginForm;
