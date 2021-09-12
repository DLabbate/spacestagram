import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import * as postApi from "./utils/api/post-api";

function App() {
  const [astronomyPosts, setPosts] = useState([]);

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
  return (
    <div className="w-auto">
      <div className="masonry m-4 p-4">
        {astronomyPosts.map((item) => {
          return (
            <AstronomyPost
              title={item.title}
              description={item.explanation}
              imageUrl={item.hdurl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
