import React, { useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,getYear,
  endOfWeek,isFirstDayOfMonth,isToday,getMonth,getDate,isSameMonth, subDays
} from "date-fns";
import "./Dates.css";
import Event from "../Event/Event";

const Dates = ({ activeDate, selectedDate, setSelectedDate ,onLeftbar,events}) => {

  // console.log('dates',selectedDate)
  const [currentWeekDates, setCurrentWeekDates] = useState([]);
  const [isSelected,setIsSelected]=useState(false)

  const today = format(new Date(), "d");

  const currentMonth = getMonth(activeDate);
  const currentYear = getYear(activeDate);

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth);
  const endDate = endOfWeek(endOfTheSelectedMonth);

  const handleDateClick=(date)=>{
    setSelectedDate(date)
    setIsSelected(!isSelected)
  }
  
  useEffect(() => {
    // days of a week
    const getWeekDates = (startDate) => {
      let currentDate = startDate;
      const week = [];
      for (let d = 0; d < 7; d++) {
        week.push(format(currentDate, "MMM d"));
        currentDate = addDays(currentDate, 1);
      }
      return week;
    };

    const allWeeks = [];
    let currentDate = startDate;

    while (allWeeks.length < 5) {
      allWeeks.push(getWeekDates(currentDate));
      currentDate = addDays(currentDate, 7);
    }

    setCurrentWeekDates(allWeeks);
  }, [activeDate]);

  return (
    <div className="dates-container">
      
      {currentWeekDates.map((week, index) => {
        // console.log('currentWeekDates',currentWeekDates)
        return(
        <div key={index} className="week" >
          {week.map((date, idx) => { 

          const dateNum = date.slice(4)

            return(
            <div
              key={idx}
              className={`${onLeftbar ===false? 'week-cell':'week-cell-left'} text-black `}
              onClick={() => handleDateClick(date)}
            >
              <span className={`${dateNum === today ? "today" : ""} ${isSelected ?"selected-day":""}`} >
             {
              dateNum == 1 ? date : dateNum
             }
            </span>
            </div> 
          )})}
        </div>
      )})}
    </div>
  );
};

export default Dates;
