import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";

export const Nav = () => {
  const {
    country,
    category,
    source,
    setCountry,
    setCategory,
    setSource,
    setSearchQuery,
  } = useContext(NewsContext);

  const defaultValue = "";

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setSource(defaultValue);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSource(defaultValue);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    setCountry(defaultValue);
    setCategory(defaultValue);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="inline-flex">
            <button class="bg-blue-500 text-white font-bold py-2 px-2 border-b-4 border-blue-700">
              News
            </button>
            <button class="bg-white-500 text-blue-500 font-bold py-2 px-2 border-b-4 border-white-700">
              BITE
            </button>
          </div>
          <div className="flex md:order-2">
            <input
              className="hidden md:block"
              type="text"
              placeholder="Search news..."
              onChange={handleSearchChange}
            />
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                placeholder="Search news..."
                onChange={handleSearchChange}
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <select value={country} onChange={handleCountryChange}>
                  <option value="">Global</option>
                  <option value="us">USA</option>
                  <option value="gb">UK</option>
                  <option value="in">India</option>
                </select>
              </li>
              <li>
                <select value={category} onChange={handleCategoryChange}>
                  <option value="">All Categories</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </select>
              </li>
              <li>
                <select value={source} onChange={handleSourceChange}>
                  <option value="">All Sources</option>
                  <option value="bbc-news">BBC News</option>
                  <option value="cnn">CNN</option>
                  <option value="techcrunch">TechCrunch</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
