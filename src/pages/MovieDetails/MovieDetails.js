import React, { useEffect, useState } from "react";
import { CssBaseline, Typography, Grid, Button } from "@material-ui/core";
import APIService from "../../utils/APIService";
import { Appbar } from "../../components/Appbar/Appbar";
import { getFavoritesOrEmptyArray, setFavorites } from "../../utils/helpers";

export const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const savedMovies = getFavoritesOrEmptyArray();

  useEffect(() => {
    const movieId = match.params.id;
    APIService.fetchMovieById(movieId)
      .then((response) => {
        setMovie(response);
        console.log(response);
      })
      .catch((error) => console.error(error));
    setIsSaved(!!savedMovies.find((entry) => entry.imdbID === movieId));
  }, [match]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFavorite = () => {
    if (isSaved) {
      const moviesUpdated = savedMovies.filter(
        (entry) => entry.imdbID !== movie.imdbID
      );
      setFavorites(moviesUpdated);
    } else {
      savedMovies.push(movie);
      setFavorites(savedMovies);
    }
    setIsSaved(!isSaved);
  };

  return (
    <>
      <CssBaseline />
      <Appbar details />
      <Grid container direction="column" style={{ padding: 24 }}>
        <Grid
          item
          container
          direction="row"
          wrap="nowrap"
          style={{ marginBottom: 12 }}
        >
          <Grid item>
            <img src={movie.Poster} alt={movie.Title} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ padding: "0 0 12px 16px" }}
          >
            <Typography variant="h4">
              {movie.Title} ({movie.Year})
            </Typography>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 6 }}
            >
              <Typography style={{ marginRight: 12 }}>
                <strong>Nota do IMDB:</strong> {movie.imdbRating}/10
              </Typography>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleFavorite}
              >
                {!isSaved ? "Favoritar" : "Desfavoritar"}
              </Button>
            </div>
            <Typography variant="body2" style={{ marginTop: 6 }}>
              <strong>Duração:</strong> {movie.Runtime} |{" "}
              <strong>Lançamento:</strong> {movie.Released}
            </Typography>
            <Typography variant="body2">
              <strong>Gênero:</strong> {movie.Genre}
            </Typography>
            <Typography style={{ marginTop: 6 }}>{movie.Plot}</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2">
          <strong>Diretor:</strong> {movie.Director}
        </Typography>
        <Typography variant="body2">
          <strong>Roteiristas:</strong> {movie.Writer}
        </Typography>
        <Typography variant="body2">
          <strong>Elenco:</strong> {movie.Actors}
        </Typography>
      </Grid>
    </>
  );
};
