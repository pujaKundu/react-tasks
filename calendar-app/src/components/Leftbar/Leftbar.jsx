import React, { useState } from 'react'
import Dates from '../Dates/Dates'
import './Leftbar.css'
import Calendar from '../Calendar/Calendar'

const Leftbar = ({ activeDate, selectedDate, setSelectedDate }) => {
  const [events,setEvents]=useState([])

  return (
    <div className='leftbar-container'>
      <select className='create-btn'>
        <option value="Create">
          <span className='btn-text'>
          Create
          </span>
          
          </option>
          <option value="event">Event</option>
      </select>
      <div className='mini-calendar'>
        <Calendar  activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>
      
    </div>
  )
}

export default Leftbar
