/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  isSameMonth,
} from "date-fns";
import "./Dates.css";

const Dates = ({
  activeDate,
  selectedDate,
  setSelectedDate,
  onLeftbar,
  events,
  setShowEvent,
  weekDays,
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
        week.push(format(currentDate, "MMM d yyyy"));
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
      <div className="week-days-container">
        {weekDays.map((day, index) => (
          <div key={index} className="day">
            <span>{day}</span>
          </div>
        ))}
      </div>
      {currentWeekDates.map((week, index) => {
        return (
          <div key={index} className="week">
            {week.map((date, idx) => {
              const currentDate = new Date(
                `${activeDate.getFullYear()}-${date}`
              );

              const dateEvents = events?.filter((event) => {
                const eventStartDate = new Date(event?.startDate);
                const eventEndDate = new Date(event?.endDate);

                eventStartDate.setHours(0, 0, 0, 0);
                eventEndDate.setHours(0, 0, 0, 0);
                currentDate.setHours(0, 0, 0, 0);

                if (!event?.endDate) {
                  return currentDate.getTime() === eventStartDate.getTime();
                }

                return (
                  currentDate >= eventStartDate && currentDate <= eventEndDate
                );
              });

              const dateNum = date.slice(4, 6);

              const firstDate = date.slice(0, 5);

              return (
                <div
                  key={idx}
                  className={`${
                    onLeftbar === false ? "week-cell" : "week-cell-left"
                  } text-black`}
                  onClick={() => handleShowEvent(date)}
                >
                  <span
                    className={`${dateNum === today ? "today" : ""} ${
                      isSameMonth(currentDate, activeDate)
                        ? "text-black"
                        : "text-gray"
                    } `}
                  >
                    {dateNum == 1 ? firstDate : dateNum}
                  </span>

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
