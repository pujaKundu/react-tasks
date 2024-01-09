import React,{useState} from "react";
import Topbar from "../Topbar/Topbar";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
import Calendar from "../Calendar/Calendar";
import "./Homepage.css";

const Homepage = () => {
  const [selectedDate,setSelectedDate]=useState(new Date())
  const [activeDate,setActiveDate]=useState(new Date())
  return (
    <div className="home">
      {/* topbar */}
      <Topbar activeDate={activeDate}/>
      {/* main section */}
      <div className="container">
        {/* leftbar */}
        <Leftbar />
        {/* calendar */}
        <Calendar activeDate={activeDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        {/* rightbar */}
        <Rightbar />
      </div>
    </div>
  );
};

export default Homepage;
