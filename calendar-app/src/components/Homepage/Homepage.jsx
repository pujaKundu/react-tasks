import { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
import Calendar from "../Calendar/Calendar";
import {  addMonths, subMonths } from "date-fns";
import "./Homepage.css";
import Event from "../Event/Event";

const Homepage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [onLeftbar, setOnLeftbar] = useState(false);

  const [showEvent, setShowEvent] = useState(false);

  const handlePrevMonth = () => {
    setActiveDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setActiveDate((prevDate) => addMonths(prevDate, 1));
  };

  return (
    <div className="home">
      <Topbar
        activeDate={activeDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <div className="container">
        {showEvent && (
          <Event
            selectedDate={selectedDate}
            events={events}
            setEvents={setEvents}
            setShowEvent={setShowEvent}
          />
        )}

        <Leftbar
          activeDate={activeDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onLeftbar={onLeftbar}
          setOnLeftbar={setOnLeftbar}
          events={events}
          setEvents={setEvents}
        />
        <Calendar
          activeDate={activeDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onLeftbar={onLeftbar}
          events={events}
          setEvents={setEvents}
          setShowEvent={setShowEvent}
        />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
