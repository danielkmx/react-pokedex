import React from 'react';
import SearchBar from './SearchBar';
import Pokeapi from '../apis/Pokeapi';
import ListPokemon from './ListPokemon';


class App extends React.Component{
    state = {pokemonData: {}}
    onSearched = async (term) => {
        const results = await Pokeapi.get('/pokemon/' + term);
        this.setState({pokemonData: results.data});
    }
    render(){
        return (
            <div>
            <SearchBar onSubmit={(e) => this.onSearched(e)} />
            <ListPokemon pokemon={this.state.pokemonData} />
            </div>
        );
    }


}


export default App;