import React from "react";

const Header = () => {
  return (
    <div className="z-50 box-border h-24 p-8 flex justify-start items-center">
      <img
        src="https://image.flaticon.com/icons/png/512/1740/1740273.png"
        className="z-50 h-16 w-16 "
        alt="Planets"
      />
      <span className="z-50 text-2xl font-bold ml-2">Spacestagram</span>
    </div>
  );
};

export default Header;
