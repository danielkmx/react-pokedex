import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import mockPokemon from '../PokemonMock';
import ListFavoritePokemon from "../../components/ListFavoritePokemon";

const mockStore = configureMockStore();

describe("ListFavoritePokemon", () => {
const store = mockStore({pokemons: [mockPokemon]});

    it("should mount app", () => {
        console.log(store)
       mount(
        <Provider store={store}>
          <ListFavoritePokemon />
        </Provider>
      );
    });
  });
  