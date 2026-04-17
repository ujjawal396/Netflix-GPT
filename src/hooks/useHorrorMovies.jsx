import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";
import { api_key } from "../utils/constants";

const useHorrorMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&sort_by=popularity.desc`);
    const json = await data.json();
    
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;