import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const everything = "everything?";

    let apiUrl = `https://newsapi.org/v2/`;

    const apiKey = import.meta.env.VITE_API_KEY;

    if (searchQuery) {
      apiUrl += everything + `q=${searchQuery}`;
    } else if (country || category || source) {
      apiUrl = `https://newsapi.org/v2/top-headlines?`;

      if (country) {
        apiUrl += `country=${country}`;

        if (category) {
          apiUrl += `&category=${category}`;
        }
      } else if (category) {
        apiUrl += `category=${category}`;
      } else if (source) {
        apiUrl += `sources=${source}`;
      }
    } else {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=us`;
    }

    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl + apiKey);
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
        category,
        country,
        source,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
