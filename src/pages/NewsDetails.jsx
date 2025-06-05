import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import NewsDetailsCard from "./../components/NewsDetailsCard";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = newsData.find((news) => news.id == id);
    setNews(newsDetails);
  }, [newsData, id]);

  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <header>
        <Header />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8 text-center my-6">
        <section className="col-span-1 md:col-span-9">
          <h2 className="font-semibold text-lg text-primary">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-1 md:col-span-3 sticky -top-216 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
