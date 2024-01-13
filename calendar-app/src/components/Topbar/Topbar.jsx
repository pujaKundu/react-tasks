import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { format} from "date-fns";
import logo from "../../assets/icons/google-calendar.png";
import "./Topbar.css";

const Topbar = ({ activeDate ,handlePrevMonth,handleNextMonth}) => {

  return (
    <div className="topbar">
      <div className="leftmenu">
        <RxHamburgerMenu className="topbar-icon menu-icon" />

        <img src={logo} alt="logo" className="logo" />
        <span>Calendar</span>

        <span className="today-span">Today</span>

        <MdArrowBackIosNew className="topbar-icon" onClick={handlePrevMonth}/>
        <MdArrowForwardIos className="topbar-icon" onClick={handleNextMonth}/>

        <h2 className="month-name">{format(activeDate, "MMMM yyyy")}</h2>
      </div>

      <div className="rightmenu">
        <FaSearch className="right-icon icon" />
        <FaRegQuestionCircle className="right-icon icon" />
        <IoSettingsOutline className="right-icon icon" />
        <select name="" id="" className="select icon">
          <option value="Month">Month</option>
          <option value="Month">Week</option>
        </select>
        <div className="icon-container">
          <FaRegCalendarAlt className="icon calendar-icon" />
          <FaTasks className="icon" />
        </div>
        <CgMenuGridO className="icon menu-icon" />
      </div>
    </div>
  );
};

export default Topbar;
