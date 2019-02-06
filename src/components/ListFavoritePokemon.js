import React from "react";
import { connect } from "react-redux";

class ListFavoritePokemon extends React.Component {
  render() {
      if(this.props.pokemons.length > 0){
      const pokemons = this.props.pokemons.map(pokemon => {
          return (
            <div className="card">
            <div className="content">
              <img className="right floated mini ui image" src={pokemon.sprites.back_default} />
              <div className="header">
               {pokemon.name}
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic red button">Remove</div>
              </div>
            </div>
          </div>
          );

      });
      return (
          <div>
          {pokemons}

          </div>
      );
      }
      return <div></div>
    }
  }

const mapStateToProps = state => {
  return { pokemons: state.favoritePokemons };
};
export default connect(mapStateToProps)(ListFavoritePokemon);
