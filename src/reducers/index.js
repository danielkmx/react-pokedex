import { combineReducers } from 'redux';
import PokeDetailReducer from './PokeDetailReducer'
import favoritePokemonsReducer from './favoritePokemonReducer';


export default combineReducers({
    pokemon: PokeDetailReducer,
    favoritePokemons: favoritePokemonsReducer
})