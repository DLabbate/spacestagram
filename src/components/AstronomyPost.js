import React from "react";
import { FiHeart } from "react-icons/fi";
import "./AstronomyPost.css";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const Media = () => {
    return mediaType === "video" ? (
      <iframe
        className="object-cover rounded-t-2xl w-full"
        src={url}
        alt="Astronomy"
        title={title}
        allowFullScreen
        loading="lazy"
      ></iframe>
    ) : (
      <img
        className="object-cover rounded-t-2xl w-full"
        src={url}
        alt="Astronomy"
        loading="lazy"
      />
    );
  };

  const Content = () => {
    return (
      <div className="m-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-sm">{date}</h4>
        <p>{description}</p>

        <button
          onClick={() => {
            liked ? removeLike(date) : addLike(date);
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
    );
  };

  return (
    <div
      className="w-auto m-4 shadow-lg rounded-2xl inline-block relative bg-white"
      ref={ref}
    >
      {inView ? <Media /> : null}

      <Content />
    </div>
  );
};

export default AstronomyPost;
