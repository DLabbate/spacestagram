import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import Header from "./components/Header";
import * as postApi from "./utils/api/post-api";
import Masonry from "./components/Masonry";
import LoadingScreen from "./components/LoadingScreen";
import { getDateMonthAgo, formatDate } from "./utils/helpers/date-helper";

function App() {
  const [astronomyPosts, setPosts] = useState(null);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  let today = new Date();
  let monthAgo = getDateMonthAgo();

  useEffect(() => {
    const updateAstronomyPosts = async () => {
      setLoading(true);

      // console.log(formatDate(monthAgo));

      const astronomyPosts = await postApi.getPosts(
        formatDate(monthAgo),
        formatDate(today)
      );

      // console.log(astronomyPosts);

      setPosts(astronomyPosts);
      setLoading(false);
    };

    updateAstronomyPosts();
  }, []);

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  const AstronomyPosts = () => {
    return astronomyPosts.map((item) => {
      return (
        <AstronomyPost
          title={item.title}
          description={item.explanation}
          url={item.hdurl ? item.hdurl : item.url}
          date={item.date}
          liked={isLiked(item.title)}
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
      {astronomyPosts && !loading ? (
        <Masonry>
          <AstronomyPosts />
        </Masonry>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
