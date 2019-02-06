import React from "react";
import PokemonDetail from "../components/PokemonDetail";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
it("Pokemon detail", () => {
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
const store = mockStore({pokemon: mockPokemon});

  const wrapper = mount(
    <Provider store={store}>
      <PokemonDetail  />
    </Provider>
  );
  expect(wrapper.find('a').text()).toEqual('ditto');
});
