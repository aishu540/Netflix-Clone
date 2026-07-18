import { useState } from 'react'

import './App.css'
import LoginForm from './Components/LoginForm/LoginForm'
import GetApi from './Components/GetApi/GetApi'
import PutApi from './Components/PutApi/PutApi'
import DeleteApi from './Components/DeleteApi/DeleteApi'
import UserDetails from './Components/UseDetails/UserDetails'
import { Route, Routes } from 'react-router-dom'
import StudentDetails from './Pages/StudentDetails'

function App() {
 

  return (
    <>
     
     <div>
      
      {/* <LoginForm/> */}
      {/* <GetApi/> */}
      {/* <PutApi/> */}
      {/* <DeleteApi/> */}
      <Routes>
        <Route path="/students/:id" element={<StudentDetails />}/>
        <Route path="/" element={ <UserDetails/>}/>
      </Routes>
     
      </div> 
    </>
  )
}

export default App
