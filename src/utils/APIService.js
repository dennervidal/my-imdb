import customFetch from "./customFetch";
import { API_ROOT } from "./apiPath";

export default class APIService {
  static fetchMoviesByYear(year) {
    return customFetch(
      API_ROOT,
      "GET",
      null,
      null,
      `y=${year}&s=Star Wars&type=movie`
    );
  }
  static fetchMovieById(id) {
    return customFetch(API_ROOT, "GET", null, null, `i=${id}`);
  }
}
