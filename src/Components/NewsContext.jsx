import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey = "YOUR_NEWS_API_KEY";

  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;

    if (country) apiUrl += `&country=${country}`;
    if (category) apiUrl += `&category=${category}`;
    if (source) apiUrl += `&sources=${source}`;
    if (searchQuery) apiUrl += `&q=${searchQuery}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [country, category, source, searchQuery]);

  return (
    <NewsContext.Provider
      value={{
        articles,
        setCountry,
        setCategory,
        setSource,
        setSearchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
