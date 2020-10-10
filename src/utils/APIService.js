import customFetch from "./customFetch";
import { API_ROOT } from "./apiPath";

export default class APIService {
  static fetchMovies(parameter, page) {
    return customFetch(
      API_ROOT,
      "GET",
      null,
      null,
      `s=${parameter}&page=${page}`
    );
  }

  static fetchMovieById(id) {
    return customFetch(API_ROOT, "GET", null, null, `i=${id}`);
  }
}
