import React from "react";
import { connect } from "react-redux";
import { fetchFavoritePokemons, favoritePokemon} from '../actions';


class PokemonDetail extends React.Component {
  render() {
    if (this.props.pokemon.sprites) {
      const habilidades = this.props.pokemon.abilities.map(element => {
        return <li key={element.ability.url}>{element.ability.name}</li>;
      });
      const tipos = this.props.pokemon.types.map(element => {
        return <li key={element.type.url}>{element.type.name}</li>;
      });

      return (
        <div className="ui card">
          <div className="image">
            <img src={this.props.pokemon.sprites.back_default} />
          </div>
          <div className="content">
            <a className="header">{this.props.pokemon.name}</a>
            <div className="meta">
              <span className="date">Habilidades</span>
              <ul>{habilidades}</ul>
            </div>
            <div className="description">
              <span className="date">Tipos</span>
              <ul>{tipos}</ul>
            </div>
          </div>
          <button
            onClick={() => {
                this.props.favoritePokemon(this.props.pokemon.name,
                  this.props.pokemon.types[0].type.name,
                  this.props.pokemon.sprites.back_default)
              }}
            className="ui button primary"
          >
            Add
          </button>
        </div>
      );
    }
    return <div />;
  }
}
const mapStateToProps = state => {
  return { pokemon: state.pokemon };
};
export default connect(mapStateToProps,{fetchFavoritePokemons, favoritePokemon})(PokemonDetail);
