import React,{useState} from "react";
import Topbar from "../Topbar/Topbar";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
import Calendar from "../Calendar/Calendar";
import { format,addMonths ,subMonths} from "date-fns";
import "./Homepage.css";

const Homepage = () => {
  const [selectedDate,setSelectedDate]=useState(new Date())
  const [activeDate,setActiveDate]=useState(new Date())
  const [onLeftbar,setOnLeftbar]=useState(false)

  const handlePrevMonth = () => {
    setActiveDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setActiveDate((prevDate) => addMonths(prevDate, 1));
  };
  return (
    <div className="home">
      {/* topbar */}
      <Topbar activeDate={activeDate} handlePrevMonth={handlePrevMonth} handleNextMonth={handleNextMonth}/>
      {/* main section */}
      <div className="container">
        {/* leftbar */}
        <Leftbar activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} onLeftbar={onLeftbar} setOnLeftbar={setOnLeftbar}/>
        {/* calendar */}
        <Calendar activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} onLeftbar={onLeftbar} setOnLeftbar={setOnLeftbar}/>
        {/* rightbar */}
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
