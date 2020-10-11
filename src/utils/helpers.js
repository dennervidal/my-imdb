export const getFavoritesOrEmptyArray = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const setFavorites = (movies) =>
  localStorage.setItem("favorites", JSON.stringify(movies));
