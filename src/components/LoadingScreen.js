import React from "react";
import loadingSpinner from "../assets/loading-spinner.png";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 m-0 p-0 bg-gray-100 z-10">
      <img
        src={loadingSpinner}
        className="absolute m-auto top-0 bottom-0 left-0 right-0 animate-spin-slow w-16 h-16"
        alt="Loading..."
      />
    </div>
  );
};

export default LoadingScreen;
