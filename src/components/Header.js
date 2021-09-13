import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";

const Header = ({ startDate, endDate, onDateChange }) => {
  return (
    <div className="z-50 box-border lg:h-24 p-8 flex flex-col lg:flex-row justify-between items-cente">
      <div className="flex items-center justify-center lg:justify-start">
        <img
          src="https://image.flaticon.com/icons/png/512/1740/1740273.png"
          className="z-50 h-16 w-16 "
          alt="Planets"
        />
        <span className="z-50 text-2xl font-bold ml-2">Spacestagram</span>
      </div>

      <div className="bg-gray-100 flex justify-center items-center">
        {/* <label>Select Range 📅</label> */}
        <DatePicker
          selected={startDate}
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          maxDate={new Date()}
          selectsRange
          className="bg-gray-100"
        />
      </div>
    </div>
  );
};

export default Header;
