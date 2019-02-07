import reducer from '../../reducers'
import pokemonMock from '../PokemonMock'
describe('pokemon reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        pokemon: [],
        favoritePokemons: []
      }
    )
  })

  it('should handle FETCH_POKEMON', () => {
  
    expect(
      reducer({pokemon: pokemonMock , favoritePokemons: []}, {
        type: "FETCH_POKEMON",
        payload: pokemonMock
      })
    ).toEqual(
      {
        pokemon: pokemonMock,
        favoritePokemons: []
      }
    )

  })
  it('should handle FAVORITE_POKEMON', () => {
  
    expect(
      reducer({pokemon: pokemonMock , favoritePokemons: []}, {
        type: "FAVORITE_POKEMON",
        payload: pokemonMock
      })
    ).toEqual(
      {
        pokemon: pokemonMock,
        favoritePokemons: [pokemonMock]
      }
    )

  })
})
