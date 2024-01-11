import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import "./Event.css";
import { format } from "date-fns";

const Event = ({ selectedDate,events,setEvents,setShowEvent }) => {

  // field inputs
  const [title,setTitle]=useState('')
  const [endDate,setEndDate]=useState('')
  const [startTime,setStartTime]=useState('')
  const [endTime,setEndTime]=useState('')

  const selectedDateVal = format(selectedDate, "d");
  const selectedDateName = format(selectedDate, "eeee");
  const selectedDateMonth = format(selectedDate, "MMMM");

  console.log(format(selectedDate, "yyyy-MM-dd"))

  const [startDate, setStartDate] = useState('');

  const handleCreateEvent=()=>{
    
    const allEvents=[]

    const newEvent ={
      title:title,
      startDate:startDate,
      endDate: endDate,
      startTime:startTime,
      endTime:endTime
    }

    allEvents.push(newEvent)

    setEvents((prevEvents)=>[...prevEvents,newEvent])
    // resets
    setTitle('')
    setStartDate('')
    setEndDate('')
    setStartTime('')
    setEndTime('')
    setShowEvent(false)
  }
  const handleCloseEvent = ()=>{
    setShowEvent(false)
  }
  return (
    <div className="modal">
      <span className="date">
        <MdDateRange className="date-icon" />
        {selectedDateName}, {selectedDateVal} {selectedDateMonth}
      </span>
      <input
        type="text"
        placeholder="Add Event Title"
        className="title-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="date-container">
        <label htmlFor="">Start date</label>
        <input type="date" name="" id="" className="time-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </span>
      <span className="date-container">
        <label htmlFor="time">End date</label>
        <input type="date" name="" id="time" className="time-input" onChange={(e) => setEndDate(e.target.value)} />
      </span>
      <span className="time-container">
        <label htmlFor="time">Start time</label>
        <input type="time" name="" id="time" className="time-input" onChange={(e) => setStartTime(e.target.value)} />
      </span>
      <span className="time-container">
        {/* <GoClock className='clock-icon'/> */}
        <label htmlFor="time">End time</label>
        <input type="time" name="" id="time" className="time-input left" onChange={(e) => setEndTime(e.target.value)} />
      </span>
      <div className="btn-container">
      <button className="save-btn" onClick={handleCreateEvent}>Save</button>
      <button className="cancel-btn" onClick={handleCloseEvent}>Cancel</button>
      </div>
    </div>
  );
};

export default Event;
