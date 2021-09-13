import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost";
import * as postApi from "./utils/api/post-api";
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
    <div className="w-auto bg-gray-100">
      <div className="masonry p-4">
        {astronomyPosts && !loading ? (
          <AstronomyPosts />
        ) : (
          <div className="w-screen h-screen relative">
            <img
              src="https://img-premium.flaticon.com/png/512/2120/premium/2120463.png?token=exp=1631483618~hmac=f3c1ceb4e09bee762a0607b6993be025"
              className="absolute m-auto top-0 bottom-0 left-0 right-0 animate-spin-slow w-16 h-16"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
