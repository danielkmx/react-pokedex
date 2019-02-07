import React from "react";
import { connect } from "react-redux";
import { fetchFavoritePokemons , deletePokemon } from "../actions";

export class ListFavoritePokemon extends React.Component {
  componentDidMount() {
    this.props.fetchFavoritePokemons();
  }

  render() {
    if (this.props.pokemons.length > 0) {
      const pokemons = this.props.pokemons.map(pokemon => {
        return (
          <div>
          <div className="card">
            <div className="content">
              <img
                className="right floated mini ui image"
                src={pokemon.image}
              />
              <div className="header">{pokemon.name}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic red button"
                onClick={() => this.props.deletePokemon(pokemon.name)}
                >Remove</div>
              </div>
            </div>
          </div>
            
          </div>
        );
      });
      return <div>
      

      <div class=" ui floating message">
  <p>Favorite pokemons</p>
</div>
      {pokemons}</div>;
    }
    return <div class=" ui floating message">
    <p>Favorite pokemons</p>
  </div>;
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { pokemons: state.favoritePokemons };
};
export default connect(
  mapStateToProps,
  { fetchFavoritePokemons ,deletePokemon }
)(ListFavoritePokemon);
