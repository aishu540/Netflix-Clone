import React from 'react'
import { Navigate } from 'react-router-dom'

const RoleProtectedRoute = ({children,role}) => {
    const token=localStorage.getItem("token")
    const userrole=localStorage.getItem("role")
    if(!token){
        return <Navigate to="/login"/>
    }
    if(userrole!==role){
        return <Navigate to="/dashboard"/>
    }
  return children
}

export default RoleProtectedRoute