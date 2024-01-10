import React, { useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,isFirstDayOfMonth,isToday,getMonth,getDate,isSameMonth, subDays
} from "date-fns";
import "./Dates.css";

// list of months

// const allMonths = [
//   "Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"
// ]

const Dates = ({ activeDate, selectedDate, setSelectedDate ,onLeftbar}) => {
  
  const [currentWeekDates, setCurrentWeekDates] = useState([]);

  const today = format(new Date(), "d");

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth);
  const endDate = endOfWeek(endOfTheSelectedMonth);

  useEffect(() => {
    // days of a week
    const getWeekDates = (startDate) => {
      let currentDate = startDate;
      const week = [];

      for (let d = 0; d < 7; d++) {
        week.push(format(currentDate, "d"));
        currentDate = addDays(currentDate, 1);
      }
      return week;
    };

    const allWeeks = [];
    let currentDate = startDate;

    // console.log('all week',allWeeks)

    while (allWeeks.length < 5) {
      allWeeks.push(getWeekDates(currentDate));
      currentDate = addDays(currentDate, 7);
    }

    setCurrentWeekDates(allWeeks);
  }, [activeDate]);

  const isFirstDay = isFirstDayOfMonth(activeDate);
  
  return (
    <div className="dates-container">
      {/* className={`${onLeftbar ===true? 'week':'week-left'}`} */}
      {currentWeekDates.map((week, index) => (
        <div key={index} className="week" >
          {week.map((date, idx) => {

            
            const selectedDateVal = format(selectedDate,"d")

            const startDateNum = parseInt(format(startOfTheSelectedMonth,"d"))
            const endDateNum = parseInt(format(endOfTheSelectedMonth,"d"))
            
            const currentDate = addDays(activeDate, date - 1);
            
            const isCurrentMonth = getMonth(currentDate) === getMonth(activeDate)
  
            return(
            <div
              key={idx}
              className={`${onLeftbar ===false? 'week-cell':'week-cell-left'}  ${isCurrentMonth ? "text-black" : "text-gray"}`}
              onClick={() => setSelectedDate(date)}
            >
              <span className={`${date === today ? "today" : ""} `}>
                {date}
              </span>
              {/* {date} */}
            {/* {
              date === '1' ? `${format(startOfMonth(activeDateNum),"MMM")} ${date}`:date
            } */}
            </div>
          )})}
        </div>
      ))}
    </div>
  );
};

export default Dates;
