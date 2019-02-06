import React from "react";
import SearchBar from "./SearchBar";
import Pokeapi from "../apis/Pokeapi";
import PokemonDetail from "./PokemonDetail";
import ListFavoritePokemon from "./ListFavoritePokemon";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui four column grid">
          <div className="row">
            <div className="four wide column">
              <SearchBar />
            </div>
            <div className="right floated left aligned two wide column">
            <ListFavoritePokemon />
          </div>
          </div>
          <div className="row">
            <div className="four wide column">
              <PokemonDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
