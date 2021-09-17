import React, { useRef, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { formatDateCommas } from "../utils/helpers/date/date-helper";
import {
  addToLocalStorage,
  isLiked,
  removeFromLocalStorage,
} from "../utils/helpers/local-storage/local-storage-helper";
import "./AstronomyPost.css";
import { useInView } from "react-intersection-observer";

const AstronomyPost = ({ title, description, mediaType, url, date }) => {
  const [liked, setLiked] = useState(isLiked(date));
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const addLike = () => {
    setLiked(true);
    addToLocalStorage(date);
  };

  const removeLike = () => {
    setLiked(false);
    removeFromLocalStorage(date);
  };

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

  const ImagePlaceholder = () => {
    return (
      <div className="w-full h-full absolute left-0 top-0 bg-white rounded-t-2xl">
        <div className="w-full h-full bg-gray-300 animate-pulse rounded-t-2xl"></div>
      </div>
    );
  };

  const Media = () => {
    return mediaType === "video" ? (
      <div className={`w-full relative ${getImagePadding()}`}>
        {inView ? (
          <iframe
            className={`object-cover rounded-t-2xl w-full h-full absolute left-0 top-0 ${
              loaded ? "visible" : "invisible"
            }`}
            src={url}
            alt="Astronomy"
            title={title}
            allowFullScreen
            loading="lazy"
            onLoad={() => setLoaded(true)}
          ></iframe>
        ) : null}

        {loaded ? null : <ImagePlaceholder />}
      </div>
    ) : (
      <div className={`w-full relative ${getImagePadding()}`}>
        {inView ? (
          <img
            className={`object-cover rounded-t-2xl w-full h-full absolute left-0 top-0 ${
              loaded ? "visible" : "invisible"
            }`}
            src={url}
            alt="Astronomy"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        ) : null}

        {loaded ? null : <ImagePlaceholder />}
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="m-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-sm">{formatDateCommas(new Date(date))}</h4>
        <p className="mt-4">{description}</p>

        <button onClick={liked ? removeLike : addLike}>
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

  const Skeleton = () => {
    return (
      <div className="w-full h-full z-10 bg-white opacity-100 absolute left-0 top-0 rounded-2xl">
        <div className={`w-full relative ${getImagePadding()}`}>
          <div className="object-cover rounded-t-2xl w-full h-full absolute left-0 top-0 bg-gray-200 animate-pulse" />
        </div>
        <div className="bg-gray-200 animate-pulse h-4 m-4"></div>
        <div className="bg-gray-200 animate-pulse h-4 m-4"></div>
        <div className="bg-gray-200 animate-pulse h-4 m-4"></div>
        <div className="bg-gray-200 animate-pulse h-4 m-4"></div>
      </div>
    );
  };
  return (
    <div
      ref={ref}
      className={`w-auto m-4 shadow-lg rounded-2xl inline-block relative bg-white`}
    >
      <Media />
      <Content />
    </div>
  );
};

export default AstronomyPost;
