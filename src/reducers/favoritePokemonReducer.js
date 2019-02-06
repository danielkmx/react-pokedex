


export default (state = [], action) => {
    switch (action.type) {
      case "FAVORITE_POKEMON":
      return [...state,action.payload];
      default:
        return state;
    }
  };
  