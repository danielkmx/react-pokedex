import * as actions from '../../actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import pokemonMock from '../PokemonMock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
const mockResult = pokemonMock;
describe('action creators', () => {

  it('should fetch pokemon', () => {
    fetchMock.getOnce('/pokemon/ditto',{ body: {pokemon: mockResult}})

    const expectedActions = [
      { type: "FETCH_POKEMON", payload: mockResult  }
    ]
    const store = mockStore({})

    console.log(store.getActions())
    return store.dispatch(actions.fetchPokemon('ditto'))
      .then((data) => { 
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
    it('should add favorite pokemon', () => {
      const pokemon = { name: 'teste', type: 'teste', image: 'teste' };
      const expectedAction = {
        type: "FAVORITE_POKEMON",
        payload: pokemon
      }
      expect(actions.favoritePokemon(pokemon.name,pokemon.type,pokemon.image)).toEqual(expectedAction)
    })
    it('should delete favorite pokemon', () => {
      const pokemonName = 'ditto';
      const expectedAction = {
        type: "DELETE_POKEMON",
        payload: pokemonName
      }
      expect(actions.deletePokemon(pokemonName)).toEqual(expectedAction)
    })
})

});