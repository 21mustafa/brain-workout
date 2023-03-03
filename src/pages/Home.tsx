import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import brainGif from "../assets/brain-workout.gif";
export const Home = () => {
  const { data, isLoading, error } = useFetch<Object>(
    "https://the-trivia-api.com/api/categories"
  );

  const getCategories = () => {
    if (data) {
      const categories = Object.keys(data);
      categories.push("Random");
      return <div className="link-con">
          {categories.map((category) => {
        return <Link className="link" to={`quiz/${category}`}>
          {category}
        </Link>;
      })}
      </div>;
    }
    return "Couldn't find any category";
  };

  return (
    <>
      <img src={brainGif} alt="loading..." />
      <div className="text-h1"><h1>Brain Workout</h1></div>

      <div className="categori">
        <h2>Categories: </h2>
        {isLoading
          ? "Categories are loading..."
          : error
          ? "Couldn't find any category"
          : getCategories()}
      </div>
    </>
  );
};
