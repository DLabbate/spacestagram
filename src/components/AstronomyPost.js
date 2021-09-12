import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import "./AstronomyPost.css";
const AstronomyPost = ({
  title,
  description,
  url,
  date,
  liked,
  addLike,
  removeLike,
}) => {
  return (
    <div className="w-auto m-4 shadow-lg rounded-2xl inline-block relative bg-white">
      {url.includes("youtube") ? (
        <iframe
          className="object-cover rounded-t-2xl w-full"
          src={url}
          alt="Astronomy"
          title={title}
        ></iframe>
      ) : (
        <img
          className="object-cover rounded-t-2xl w-full"
          src={url}
          alt="Astronomy"
        />
      )}
      <div className="m-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-sm">{date}</h4>
        <p>{description}</p>

        <button
          onClick={() => {
            liked ? removeLike(title) : addLike(title);
          }}
        >
          <FiHeart
            className={
              liked
                ? "absolute w-6 h-6 right-4 top-4 heart--active"
                : "absolute w-6 h-6 right-4 top-4 heart"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default AstronomyPost;
