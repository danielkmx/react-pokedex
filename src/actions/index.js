import PokeApi from "../apis/Pokeapi";

export const fetchPokemon = name => async dispatch => {
  const result = await PokeApi.get("/pokemon/" + name);
  dispatch({ type: "FETCH_POKEMON", payload: result.data });
};
export const fetchFavoritePokemons = () => async dispatch => {
  const result = await PokeApi.get("/pokemons");
  dispatch({ type: "FETCH_FAVORITE_POKEMONS", payload: result.data });
};
export const favoritePokemon = (name, type, image) => {
  return {
    type: "FAVORITE_POKEMON",
    payload: { name: name, type: type, image: image }
  };
};
export const deletePokemon = (name) => {
  return {
    type: "DELETE_POKEMON",
    payload: name
  };
};
