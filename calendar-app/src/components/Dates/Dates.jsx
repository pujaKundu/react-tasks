import React, { useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,isFirstDayOfMonth,isToday,getMonth,getDate,isSameMonth
} from "date-fns";
import "./Dates.css";

// list of months

// const allMonths = [
//   "Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"
// ]

const Dates = ({ activeDate, selectedDate, setSelectedDate ,onLeftbar,setOnLeftbar,weekDays}) => {
  console.log(activeDate)
  const [currentWeekDates, setCurrentWeekDates] = useState([]);

  const today = format(new Date(), "d");

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

    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);

    console.log(startDate)

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
            console.log("is same month ",isSameMonth(date,activeDate))
            console.log(`ac ${format(activeDate,'d')}, curr ${date}, today ${today}`)
            const activeDateNum = format(activeDate,'d')
            return(
            <div
              key={idx}
              className={`${onLeftbar ===false? 'week-cell':'week-cell-left'}  ${isSameMonth(today,activeDateNum)?'text-black':'text-gray'}`}
              onClick={() => setSelectedDate(date)}
            >
              <span className={`${date === today ? "today" : ""}`}>
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
