import React, { useState } from 'react'
import plus from '../../assets/icons/plus-sign.png'
import './Leftbar.css'
import Calendar from '../Calendar/Calendar'
import Event from '../Event/Event'

const Leftbar = ({ activeDate, selectedDate, setSelectedDate ,events,setEvents}) => {

  // console.log(selectedDate)

  const [showEvent,setShowEvent]=useState(false)

  const handleShowEvent=()=>{
    setShowEvent(!showEvent)
  }

  return (
    <div className='leftbar-container'>
      {/* create btn */}
      <button className='create-btn ' onClick={handleShowEvent}>
       <div className='btn-align'>
       <span>
          <img src={plus} alt="" className='btn-img'/>
        </span>
       <span className='btn-text'>
        Create
       </span>
       </div>
      </button>
      {
        showEvent && <Event selectedDate={selectedDate} events={events} setEvents={setEvents}/>
      }
      
      {/* show calendar */}
      <div className='mini-calendar'>
        <Calendar  activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>
      
    </div>
  )
}

export default Leftbar
