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
import User from "./Components/user";
import Authentication from "./Components/Authontication/Authentication";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import QueryParams from "./QueryParams/QueryParams";

function App() {
  return (
    <>
      <div>
        {/* <LoginForm/> */}

        {/* <PutApi/> */}
        {/* <DeleteApi/> */}
        <Routes>
          <Route path="/" element={<UserDetails />} />

          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/user"
            element={
              <ErrorBoundary>
                <User />

              </ErrorBoundary>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <RoleProtectedRoute role="admin">
                <Admin />
              </RoleProtectedRoute>
            }
          />
          <Route path="/authentication" element={<Authentication/>}  />

          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/queryparams" element={<QueryParams/>}/>
        
        </Routes>
      </div>
    </>
  );
}

export default App;
