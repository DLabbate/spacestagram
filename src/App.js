import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import Header from "./components/Header";
import * as postApi from "./utils/api/post-api";
import Masonry from "./components/Masonry";
import LoadingScreen from "./components/LoadingScreen";
import { getDateMonthAgo } from "./utils/helpers/date-helper";

function App() {
  const getLocalStorage = (key) => {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  };

  const [astronomyPosts, setAstronomyPosts] = useState({
    loading: false,
    data: [],
  });

  const [likes, setLikes] = useState(getLocalStorage("likes"));

  const [range, setRange] = useState({
    startDate: getDateMonthAgo(),
    endDate: new Date(),
  });

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setRange({
      startDate: start,
      endDate: end,
    });
  };

  const addLike = (date) => {
    setLikes([...likes, date]);
  };

  const removeLike = (date) => {
    setLikes(likes.filter((like) => like !== date));
  };

  const isLiked = (date) => {
    const index = likes.indexOf(date);
    return index > -1 ? true : false;
  };

  useEffect(() => {
    const updateAstronomyPosts = async () => {
      setAstronomyPosts({ loading: true, data: [] });

      const astronomyPosts = await postApi.getPosts(
        range.startDate,
        range.endDate
      );

      setAstronomyPosts({ loading: false, data: astronomyPosts });
    };

    if (range.startDate && range.endDate) {
      updateAstronomyPosts();
    }
  }, [range]);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const AstronomyPosts = () => {
    return astronomyPosts.data.map((item) => {
      return (
        <AstronomyPost
          key={item.date}
          title={item.title}
          description={item.explanation}
          url={item.hdurl ? item.hdurl : item.url}
          date={item.date}
          liked={isLiked(item.date)}
          addLike={addLike}
          removeLike={removeLike}
          mediaType={item.media_type}
        />
      );
    });
  };

  return (
    <div className="w-auto bg-gray-100 relative">
      <Header
        startDate={range.startDate}
        endDate={range.endDate}
        onDateChange={onDateChange}
      />
      {astronomyPosts.loading ? (
        <LoadingScreen />
      ) : (
        <Masonry>
          <AstronomyPosts />
        </Masonry>
      )}
    </div>
  );
}

export default App;
