import React, { useEffect, useState } from "react";
import { Grid, CssBaseline, Typography, Button } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import APIService from "../../utils/APIService";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Appbar } from "../../components/Appbar/Appbar";

function Home() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const savedMovies = JSON.parse(localStorage.getItem("favorites")) || [];

  useEffect(() => {
    APIService.fetchMovies(search, page)
      .then((response) => {
        setMovies(response.Search);
        setPages(Math.ceil(parseInt(response.totalResults) / 10));
      })
      .catch((error) => console.error(error));
  }, [page, search]);

  const handleShowFavorites = () => {
    setMovies(savedMovies);
  };

  return (
    <>
      <CssBaseline />
      <Appbar search={search} setSearch={setSearch} />
      <div
        style={{
          marginTop: 8,
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleShowFavorites}
        >
          Meus Favoritos
        </Button>
      </div>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ padding: 24 }}
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie && movie.imdbID}
              style={{ padding: 12 }}
            >
              <MovieCard
                movie={movie}
                isSaved={
                  !!savedMovies.find((entry) => entry.imdbID === movie.imdbID)
                }
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" className={classes.marginTop}>
            Digite algum termo na caixa de busca para começar :)
          </Typography>
        )}
      </Grid>
      {pages > 1 && (
        <div className={classes.pagination}>
          <Pagination
            count={pages}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </div>
      )}
    </>
  );
}

export const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },
}));

export default Home;
