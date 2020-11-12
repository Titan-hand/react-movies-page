import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "./MovieComponent";
import Requests from "../../Helpers/Resquests.js";

const MovieContainer = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  	Requests.getInfoMovieId(id)
  	.then(movie => {
  		// console.log(movie)
  		setMovieInfo(movie);
  		setLoading(false);
  	})
  	.catch(() => {
  		setError(true);
  	})

  }, [id])

  return <MovieComponent {...{movieInfo, isLoading, error, id}}/>;
};

export default MovieContainer;
