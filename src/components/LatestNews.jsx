import { use } from "react";
import Marquee from "react-fast-marquee";

const newsPromise = fetch("/newsData.json").then((res) => res.json());

const LatestNews = () => {
  const newsData = use(newsPromise);
  const breakingNews = newsData.filter(
    (news) => news.others.is_today_pick === true
  );

  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 font-medium bg-secondary py-2 px-5 w-fit">
        Latest
      </p>
      <Marquee className="flex text-primary">
        {breakingNews.map((news) => (
          <p className="font-medium mr-3">{news.title}.</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
