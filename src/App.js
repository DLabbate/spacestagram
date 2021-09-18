import { useEffect, useState } from "react";
import "./App.css";
import AstronomyPost from "./components/AstronomyPost/AstronomyPost";
import Header from "./components/Header/Header";
import * as astronomyApi from "./utils/api/astronomy-api";
import Masonry from "./components/Masonry/Masonry";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { getDateMonthAgo } from "./utils/helpers/date/date-helper";

function App() {
  const [astronomyPosts, setAstronomyPosts] = useState({
    loading: false,
    data: [],
  });

  const [range, setRange] = useState({
    startDate: getDateMonthAgo(new Date()),
    endDate: new Date(),
  });

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setRange({
      startDate: start,
      endDate: end,
    });
  };

  useEffect(() => {
    const updateAstronomyPosts = async () => {
      setAstronomyPosts({ loading: true, data: [] });

      const astronomyPosts = await astronomyApi.getPosts(
        range.startDate,
        range.endDate
      );

      setAstronomyPosts({ loading: false, data: astronomyPosts });
    };

    if (range.startDate && range.endDate) {
      updateAstronomyPosts();
    }
  }, [range]);

  const AstronomyPosts = () => {
    return astronomyPosts.data.map((item) => {
      return (
        <AstronomyPost
          key={item.date}
          title={item.title}
          description={item.explanation}
          url={item.url}
          date={item.date}
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
