import React, { useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
} from "date-fns";
import "./Dates.css";

const Dates = ({ activeDate, selectedDate, setSelectedDate }) => {
  const [currentWeekDates, setCurrentWeekDates] = useState([]);

  const today = format(new Date(),"d")

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

    const startOfTheSelectedMonth = startOfMonth(activeDate);// 
    const startDate = startOfWeek(startOfTheSelectedMonth);

    const allWeeks = [];
    let currentDate = startDate;

    // console.log('all week',allWeeks)

    while (allWeeks.length < 7) {
      allWeeks.push(getWeekDates(currentDate));
      currentDate = addDays(currentDate, 7);
    }

    setCurrentWeekDates(allWeeks);
  }, [activeDate]);

  return (
    <div className="dates-container">
      {currentWeekDates.map((week, index) => (
        <div key={index} className="week">
          {week.map((date, idx) => (
            <div key={idx} className={`week-cell ${date===today?'today':''}`} onClick={() => setSelectedDate(date)}>

              {date}
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dates;
