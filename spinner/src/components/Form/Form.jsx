import React, { useState } from "react";
import "./Form.css";

const Form = ({setIsSpinnerOpen}) => {

  const [color, setColor] = useState("#ffee99");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  const handleSpinnerOpen = (event)=>{
    event.preventDefault()
    setIsSpinnerOpen(true)
  }

  return (
    <>
      <form action="" className="spinner-form">
        <div className="spinner-inputs">
          <input type="text" placeholder="Enter discount" className="input"/>
          <select name="" id="" className="select">
            <option value="percentage">%</option>
            <option value="fixed">Fixed</option>
          </select>
          <input
            type="color"
            id="colorPicker"
            value={color}
            className="color-picker"
            onChange={handleColorChange}
          />
          
        </div>
        <button className="spin-btn" onClick={()=>handleSpinnerOpen(event)}>Spin</button>
      </form>
    </>
  );
};

export default Form;
