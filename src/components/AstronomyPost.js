import React from "react";

const AstronomyPost = ({ title, description, imageUrl }) => {
  return (
    <div className="w-auto m-1 shadow-lg rounded-2xl inline-block">
      <img className="object-cover rounded-t-2xl w-full" src={imageUrl} />
      <div className="m-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AstronomyPost;
