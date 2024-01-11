import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import "./Event.css";
import { format } from "date-fns";

const Event = ({ selectedDate,events,setEvents }) => {

  // field inputs
  const [title,setTitle]=useState('')
  const [startTime,setStartTime]=useState('')
  const [endTime,setEndTime]=useState('')

  console.log('event',events)

  const selectedDateVal = format(selectedDate, "d");
  const selectedDateName = format(selectedDate, "eeee");
  const selectedDateMonth = format(selectedDate, "MMMM");

  const selectedDateEvent= format(selectedDate,"MMM d")

  const handleCreateEvent=()=>{
    const allEvents=[]

    const newEvent ={
      title:title,
      date:selectedDateEvent,
      startTime:startTime,
      endTime:endTime
    }
    // console.log(newEvent)

    allEvents.push(newEvent)

    setEvents((prevEvents)=>[...prevEvents,newEvent])
    // resets
    setTitle('')
    setStartTime('')
    setEndTime('')
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
      <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Event;
