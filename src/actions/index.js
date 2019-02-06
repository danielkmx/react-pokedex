import PokeApi from "../apis/Pokeapi";

export const fetchPokemon = name => async dispatch => {
  const result = await PokeApi.get("/pokemon/" + name);
  dispatch({ type: "FETCH_POKEMON", payload: result.data });
};

export const favoritePokemon = name => async dispatch => {
    const result = await PokeApi.get("/pokemon/" + name);
    dispatch({ type: "FAVORITE_POKEMON", payload: result.data });
  };