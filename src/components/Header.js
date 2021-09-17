import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = ({ startDate, endDate, onDateChange }) => {
  return (
    <div className="z-50 box-border lg:h-24 p-8 flex flex-col lg:flex-row justify-between items-cente">
      <div className="flex items-center justify-center lg:justify-start">
        <img src={logo} className="z-50 h-16 w-16 " alt="Planets" />
        <span className="z-50 text-2xl font-bold ml-2">Spacestagram</span>
      </div>

      <div className="bg-gray-100 flex justify-center items-center">
        <label>
          Date Range
          <DatePicker
            selected={startDate}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            selectsRange
            className="bg-gray-100 m-2"
          />
        </label>
      </div>
    </div>
  );
};

export default Header;
