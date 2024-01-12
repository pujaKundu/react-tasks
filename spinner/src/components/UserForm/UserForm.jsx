import React from 'react'
import { IoMdClose } from "react-icons/io";
import './UserForm.css'

const UserForm = ({setIsSpinnerOpen}) => {
  return (
    <div className='form-container'>
      <form action="" className='form'>
        <span className='close' onClick={()=>setIsSpinnerOpen(false)}>
            <IoMdClose />
        </span>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter yout email' />
        <button className='try-btn'>Try you luck</button>
      </form>
    </div>
  )
}

export default UserForm
