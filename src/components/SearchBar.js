import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";

class SearchBar extends React.Component {
  state = { term: "" };
  onSubmited = e => {
    e.preventDefault();
    this.props.fetchPokemon(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmited}>
          <div className="ui field">
            <label>Insira o nome do pokemon</label>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { pokemon: state.pokemon };
};

export default connect(
  mapStateToProps,
  { fetchPokemon }
)(SearchBar);
