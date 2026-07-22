import React, { useEffect } from 'react'
import api from '../../services/api'
import { endpoint } from '../../services/endpoint'
const AdminDashboard = () => {
    const ProductDetails=async ()=>{
      try{
      
      const   response=await api.get(endpoint.dashboard.summary)
        console.log(response.data)
      }
     
      catch(error){

        console.log(error.message)
      }
    }
    useEffect(()=>{
        ProductDetails()
    },[])
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard