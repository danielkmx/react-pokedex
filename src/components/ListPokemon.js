import React from "react";
import { connect } from "react-redux";

class ListPokemon extends React.Component {
  render() {
    console.log(this.props);
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
        </div>
      );
    }
    return <div />;
  }
}
const mapStateToProps = state => {
  return { pokemon: state };
};
export default connect(mapStateToProps)(ListPokemon);
