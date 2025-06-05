import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategoryNews(newsData);
    } else if (id == 1) {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, newsData]);

  return (
    <div>
      <h2 className="font-semibold text-lg text-primary">
        Total {categoryNews.length} News Found
      </h2>
      <div className="grid gird-cols-1 gap-4 mt-4">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
