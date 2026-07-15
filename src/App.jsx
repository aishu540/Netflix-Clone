import { useState } from 'react'

import './App.css'
import LoginForm from './Components/LoginForm/LoginForm'
import GetApi from './Components/GetApi/GetApi'
import PutApi from './Components/PutApi/PutApi'

function App() {
 

  return (
    <>
     
     <div>
      
      {/* <LoginForm/> */}
      {/* <GetApi/> */}
      <PutApi/>
      </div> 
    </>
  )
}

export default App
