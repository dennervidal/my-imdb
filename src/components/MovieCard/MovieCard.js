import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { getFavoritesOrEmptyArray, setFavorites } from "../../utils/helpers";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function MovieCard({
  movie: { Poster, Title, Type, Year, imdbID } = {},
  isSaved: saved = false,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [isSaved, setIsSaved] = useState(saved);

  const handleFavorite = () => {
    const savedMovies = getFavoritesOrEmptyArray();

    if (isSaved) {
      const moviesUpdated = savedMovies.filter(
        (entry) => entry.imdbID !== imdbID
      );
      setFavorites(moviesUpdated);
    } else {
      savedMovies.push({ Poster, Title, Type, Year, imdbID });
      setFavorites(savedMovies);
    }
    setIsSaved(!isSaved);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Poster === "N/A" ? "/assets/notAvailable.jpg" : Poster}
          title={Title}
          onClick={() => history.push(`/filme/${imdbID}`)}
        />
        <CardContent onClick={() => history.push(`/filme/${imdbID}`)}>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Tipo: ${Type} | Ano: ${Year}`}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "space-around" }}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => history.push(`/filme/${imdbID}`)}
          >
            Ver detalhes
          </Button>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleFavorite}
            style={{ zIndex: 9999 }}
          >
            {!isSaved ? <StarBorderIcon /> : <StarIcon />}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
