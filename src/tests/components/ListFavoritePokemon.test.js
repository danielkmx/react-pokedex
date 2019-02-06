import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import mockPokemon from '../PokemonMock';
import ListFavoritePokemon from "../../components/ListFavoritePokemon";

const mockStore = configureMockStore();

describe("ListFavoritePokemon", () => {
    const mockPokemon =  {
        sprites: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
          },
          name: "ditto",
          abilities: [
            {
              ability: {
                name: "imposter",
                url: 'https://pokeapi.co/api/v2/ability/150/'
              }
            },
            {
              ability: {
                name: "imposter",
                url: "https://pokeapi.co/api/v2/ability/151/"
              }
            }
          ],
          types: [
            {
              type: {
                name: "normal",
                url: "https://pokeapi.co/api/v2/ability/151/"
              }
            }
          ]
        
      }
const store = mockStore({pokemons: [mockPokemon]});

    it("should mount app", () => {
        console.log(store)
       mount(
        <Provider store={store}>
          <ListFavoritePokemon pokemons={[mockPokemon]} />
        </Provider>
      );
    });
  });
  