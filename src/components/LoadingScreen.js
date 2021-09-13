import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 m-0 p-0 bg-gray-100 z-10">
      <img
        src="https://img-premium.flaticon.com/png/512/2120/premium/2120463.png?token=exp=1631483618~hmac=f3c1ceb4e09bee762a0607b6993be025"
        className="absolute m-auto top-0 bottom-0 left-0 right-0 animate-spin-slow w-16 h-16"
        alt="Loading..."
      />
    </div>
  );
};

export default LoadingScreen;
