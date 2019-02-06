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
  it('should create pokemon', () => {
    fetchMock.getOnce('/pokemon/ditto',{ body: {pokemon: mockResult}})

    const expectedActions = [
      { type: "FAVORITE_POKEMON", payload: mockResult  }
    ]
    const store = mockStore({})

    console.log(store.getActions())
    return store.dispatch(actions.favoritePokemon('ditto'))
      .then((data) => { 
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})

});