import plus from '../../assets/icons/plus-sign.png'
import './Leftbar.css'
import Calendar from '../Calendar/Calendar'
import {addDays, format, startOfWeek} from 'date-fns';
import { useEffect, useState } from 'react';


const Leftbar = ({ activeDate, selectedDate, setSelectedDate ,events,setEvents}) => {
const [weekDays, setWeekDays] = useState([]);

useEffect(() => {
  const getWeekDaysNames = () => {
    const weekFirstDay = startOfWeek(activeDate);
    const daysOfWeek = [];

    for (let d = 0; d < 7; d++) {
      daysOfWeek.push(format(addDays(weekFirstDay, d), "E"));
    }
    setWeekDays(daysOfWeek);
  };
  getWeekDaysNames();

  console.log(weekDays);
}, [activeDate]);
  return (
    <div className="leftbar-container">
      <h2 className="month-name">{format(activeDate, "MMMM yyyy")}</h2>
      
      <div className="mini-calendar">
        <Calendar
          activeDate={activeDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}

export default Leftbar
