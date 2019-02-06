


export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_POKEMON":
        return action.payload;
      default:
        return state;
    }
  };
  