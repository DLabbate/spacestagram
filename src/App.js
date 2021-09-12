import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import * as postApi from "./utils/api/post-api";

function App() {
  const [astronomyPosts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);

  const addLike = (title) => {
    setLikes([...likes, title]);
  };

  const removeLike = (title) => {
    setLikes(likes.filter((like) => like != title));
  };

  const isLiked = (title) => {
    const index = likes.indexOf(title);

    return index > -1 ? true : false;
  };

  /**
   * @param {Date} date the date to be formatted
   * @returns YYYY-MM-DD string
   */
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const getDateMonthAgo = () => {
    let monthAgo = new Date();
    console.log(monthAgo);
    // Set it to one month ago
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    return monthAgo;
  };

  let today = new Date();
  let monthAgo = getDateMonthAgo();

  useEffect(() => {
    const updateAstronomyPosts = async () => {
      console.log(formatDate(monthAgo));
      const astronomyPosts = await postApi.getPosts(
        formatDate(monthAgo),
        formatDate(today)
      );
      console.log(astronomyPosts);
      setPosts(astronomyPosts);
    };

    updateAstronomyPosts();
  }, []);

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  return (
    <div className="w-auto bg-gray-100">
      <div className="masonry p-4">
        {astronomyPosts.map((item) => {
          return (
            <AstronomyPost
              title={item.title}
              description={item.explanation}
              url={item.hdurl ? item.hdurl : item.url}
              date={item.date}
              liked={isLiked(item.title)}
              addLike={addLike}
              removeLike={removeLike}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
