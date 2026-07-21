import { useState } from "react";

import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import GetApi from "./Components/GetApi/GetApi";
import PutApi from "./Components/PutApi/PutApi";
import DeleteApi from "./Components/DeleteApi/DeleteApi";
import UserDetails from "./Components/UseDetails/UserDetails";
import { Route, Routes } from "react-router-dom";
import StudentDetails from "./Pages/StudentDetails";

import LoginPage from "./Components/LoginPage/LoginPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import RoleProtectedRoute from "./Components/RoleProtectedRoute/RoleProtectedRoute";
import Admin from "./Components/Admin/Admin";
import ErrorBoundary from "./services/erro";

function App() {
  return (
    <>
      <div>
        {/* <LoginForm/> */}
        <ErrorBoundary>
        <GetApi/>
        </ErrorBoundary>
        {/* <PutApi/> */}
        {/* <DeleteApi/> */}
        <Routes>
          <Route path="/" element={<UserDetails />} />

          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        
              <Route path="/admin"  element={<RoleProtectedRoute  role="admin"><Admin /></RoleProtectedRoute>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
