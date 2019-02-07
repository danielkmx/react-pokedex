


export default (state = [], action) => {
    switch (action.type) {
      case "FAVORITE_POKEMON":
      console.log(state)
      return [...state, action.payload]
      case "ADD_FAVORITE_POKEMON":
      return state;
      case 'FETCH_FAVORITE_POKEMONS':
      console.log(action)
      return action.payload
      case 'DELETE_POKEMON':
      return state.filter(pokemon => pokemon.name != action.payload)
      default:
        return state;
    }
  };
  