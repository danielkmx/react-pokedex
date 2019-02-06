import React from "react";
import SearchBar from "./SearchBar";
import Pokeapi from "../apis/Pokeapi";
import ListPokemon from "./ListPokemon";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ListPokemon />
      </div>
    );
  }
}

export default App;
