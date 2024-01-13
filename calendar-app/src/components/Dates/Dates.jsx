/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  getYear,
  endOfWeek,
  isWithinInterval,
  isFirstDayOfMonth,
  isToday,
  getMonth,
  getDate,
  isSameMonth,
  subDays,
} from "date-fns";
import "./Dates.css";

const Dates = ({
  activeDate,
  selectedDate,
  setSelectedDate,
  onLeftbar,
  events,
  setShowEvent,
}) => {
  const [currentWeekDates, setCurrentWeekDates] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const today = format(new Date(), "d");

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth);

  const handleShowEvent = (date) => {
    setShowEvent(true);
    setSelectedDate(date);
    setIsSelected(!isSelected);
  };

  useEffect(() => {
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
        return (
          <div key={index} className="week">
            {week.map((date, idx) => {
              const currentDate = new Date(
                `${activeDate.getFullYear()}-${date}`
              );

              console.log("cd ", currentDate);

              const eventsWithinDateRange = [];

              const dateEvents = events?.filter((event) => {
                const eventStartDate = new Date(event?.startDate);
                const eventEndDate = new Date(event?.endDate);

                // Set hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
                eventStartDate.setHours(0, 0, 0, 0);
                eventEndDate.setHours(0, 0, 0, 0);
                currentDate.setHours(0, 0, 0, 0);

                return (
                  currentDate >= eventStartDate && currentDate <= eventEndDate
                );
              });

              const dateNum = date.slice(4);

              return (
                <div
                  key={idx}
                  className={`${
                    onLeftbar === false ? "week-cell" : "week-cell-left"
                  } text-black date-click`}
                  onClick={() => handleShowEvent(date)}
                >
                  <span className={`${dateNum === today ? "today" : ""}  `}>
                    {dateNum == 1 ? date : dateNum}
                  </span>
                  {/* show event if exists */}
                  <div className="events-container">
                    {dateEvents?.map((event, eventIdx) => (
                      <div key={eventIdx} className="event">
                        <div className="dot"></div>
                        {event?.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Dates;
