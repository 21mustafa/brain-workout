import React, { useEffect } from "react";
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
      return categories.map((category) => {
        return <Link to={`quiz/${category}`}>{category}</Link>;
      });
    }
    return "Couldn't find any category";
  };

  return (
    <>
      <img src={brainGif} alt="loading..." />
      <h1>Brain Workout</h1>

      <div>
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
