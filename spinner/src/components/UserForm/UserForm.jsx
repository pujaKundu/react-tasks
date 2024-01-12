import React from 'react'
import { IoMdClose } from "react-icons/io";
import {useSpinnerState,useUserState} from '../../utils/statesUtils'
import './UserForm.css'

const UserForm = ({setIsSpinnerOpen}) => {

  const {name,setName,email,setEmail}=useUserState()

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
