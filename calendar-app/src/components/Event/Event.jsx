import React, { useState } from 'react'
import { GoClock } from "react-icons/go";
import './Event.css'
import { format } from 'date-fns'

const Event = ({selectedDate}) => {
const [input,setInput]=useState('')
console.log('event',selectedDate)
const selectedDateVal = format(selectedDate,"d")
const selectedDateName = format(selectedDate,"eeee")
const selectedDateMonth = format(selectedDate,"MMMM")

  return (
    <div className='modal'>
      <input type="text" placeholder='Add Event Title' className='title-input' onChange={(e)=>setInput(e.target.value)}/>
      <span className='date'>
        <GoClock className='date-icon'/>
        {selectedDateName}, {selectedDateVal} {selectedDateMonth}
      </span>
    </div>
  )
}

export default Event
