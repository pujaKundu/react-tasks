import { useEffect, useState } from "react";
import { format, startOfWeek, addDays } from "date-fns";
import "./Calendar.css";
import Dates from "../Dates/Dates";

const Calendar = ({ activeDate, selectedDate, setSelectedDate,onLeftbar,events,setEvents,setShowEvent}) => {
  
  const [weekDays,setWeekDays]=useState([])

  useEffect(() => {
    const getWeekDaysNames = () => {
      const weekFirstDay = startOfWeek(activeDate);
      const daysOfWeek = [];

      for (let d = 0; d < 7; d++) {
        daysOfWeek.push(
          format(addDays(weekFirstDay, d), "E")
        )
      }
      setWeekDays(daysOfWeek);
    };
    getWeekDaysNames();
  }, [activeDate]);

  return (
    <div className="calendar-container">

      <Dates
        activeDate={activeDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onLeftbar={onLeftbar}
        events={events}
        setEvents={setEvents}
        setShowEvent={setShowEvent}
        weekDays={weekDays}
      />
    </div>
  );
};

export default Calendar;
