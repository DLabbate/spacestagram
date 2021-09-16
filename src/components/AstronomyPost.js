import React, { useRef } from "react";
import { FiHeart } from "react-icons/fi";
import { formatDateCommas } from "../utils/helpers/date/date-helper";
import "./AstronomyPost.css";

const AstronomyPost = ({
  title,
  description,
  mediaType,
  url,
  date,
  liked,
  addLike,
  removeLike,
}) => {
  const getSize = () => {
    const wordCount = description.split(" ").length;
    if (wordCount <= 130) {
      return "small";
    } else if (wordCount <= 160) {
      return "medium";
    } else {
      return "large";
    }
  };

  const size = useRef(getSize());

  const getImagePadding = () => {
    if (size.current === "small") {
      return "pb-3/4";
    } else if (size.current === "medium") {
      return "pb-1/1";
    } else {
      return "pb-5/4";
    }
  };

  const Media = () => {
    return mediaType === "video" ? (
      <div className={`w-full relative ${getImagePadding()}`}>
        <iframe
          className="object-cover rounded-t-2xl w-full h-full absolute left-0 top-0"
          src={url}
          alt="Astronomy"
          title={title}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    ) : (
      <div className={`w-full relative ${getImagePadding()}`}>
        <img
          className="object-cover rounded-t-2xl w-full h-full absolute left-0 top-0"
          src={url}
          alt="Astronomy"
          loading="lazy"
        />
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="m-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-sm">{formatDateCommas(new Date(date))}</h4>
        <p className="mt-4">{description}</p>

        <button
          onClick={() => {
            liked ? removeLike(date) : addLike(date);
          }}
        >
          <FiHeart
            data-testid="heart-icon"
            className={
              liked
                ? "absolute w-6 h-6 right-4 top-4 heart--active"
                : "absolute w-6 h-6 right-4 top-4 heart"
            }
          />
        </button>
      </div>
    );
  };

  return (
    <div
      className={`w-auto m-4 shadow-lg rounded-2xl inline-block relative bg-white`}
    >
      <Media />
      <Content />
    </div>
  );
};

export default AstronomyPost;
