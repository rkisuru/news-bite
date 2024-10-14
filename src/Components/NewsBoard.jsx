import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const { articles } = useContext(NewsContext);

  return (
    <div className="grid 2xl:grid-cols-4 gap-2 justify-items-center mb-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsBoard;
