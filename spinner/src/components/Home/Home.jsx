import React, { useState } from 'react'
import { Form, UserForm, UserInformation } from '../index'
import './Home.css'

const Home = () => {
  const [isSpinnerOpen,setIsSpinnerOpen]=useState(false)
  return (
    <div className='container'>
      <Form setIsSpinnerOpen={setIsSpinnerOpen}/>
      <UserInformation/>
      <div className='spinner-container'>
      {isSpinnerOpen && <UserForm setIsSpinnerOpen={setIsSpinnerOpen}/>}
      </div>
    </div>
  )
}

export default Home
