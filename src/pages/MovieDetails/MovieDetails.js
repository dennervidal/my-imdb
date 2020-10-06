import React, { useEffect } from "react";
import APIService from "../../utils/APIService";

export const MovieDetails = ({ match }) => {
  console.log(match.params.id);
  useEffect(() => {
    APIService.fetchMovieById(match.params.id)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, [match]);

  return <p>Pagina do filme</p>;
};
