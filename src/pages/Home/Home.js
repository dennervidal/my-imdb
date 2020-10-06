import React, { useEffect, useState } from "react";
import APIService from "../../utils/APIService";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Grid } from "@material-ui/core";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    APIService.fetchMoviesByYear(2020)
      .then((response) => {
        setMovies(response.Search);
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container>
      {movies.map((movie) => (
        <Grid item xs={6} key={movie && movie.imdbID}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
