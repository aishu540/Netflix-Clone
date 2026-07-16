import { useState } from 'react'

import './App.css'
import LoginForm from './Components/LoginForm/LoginForm'
import GetApi from './Components/GetApi/GetApi'
import PutApi from './Components/PutApi/PutApi'
import DeleteApi from './Components/DeleteApi/DeleteApi'
import UserDetails from './Components/UseDetails/UserDetails'

function App() {
 

  return (
    <>
     
     <div>
      
      {/* <LoginForm/> */}
      {/* <GetApi/> */}
      {/* <PutApi/> */}
      {/* <DeleteApi/> */}
      <UserDetails/>
      </div> 
    </>
  )
}

export default App
