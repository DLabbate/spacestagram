import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import Header from "./components/Header";
import * as postApi from "./utils/api/post-api";
import Masonry from "./components/Masonry";
import LoadingScreen from "./components/LoadingScreen";
import { getDateMonthAgo, formatDate } from "./utils/helpers/date-helper";

function App() {
  const [astronomyPosts, setAstronomyPosts] = useState({
    loading: false,
    data: [],
  });
  const [likes, setLikes] = useState([]);

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

  let today = new Date();
  let monthAgo = getDateMonthAgo();

  useEffect(() => {
    const updateAstronomyPosts = async () => {
      setAstronomyPosts({ loading: true, data: [] });

      const astronomyPosts = await postApi.getPosts(
        formatDate(monthAgo),
        formatDate(today)
      );

      setAstronomyPosts({ loading: false, data: astronomyPosts });
    };

    updateAstronomyPosts();
  }, []);

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  const AstronomyPosts = () => {
    return astronomyPosts.data.map((item) => {
      return (
        <AstronomyPost
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
      <Header />
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
