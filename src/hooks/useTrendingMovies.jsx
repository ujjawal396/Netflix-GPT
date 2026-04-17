import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { api_key } from "../utils/constants";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`);
    const json = await data.json();
   
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;