import React from "react";
import App from "../../components/App";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import mockPokemon from '../PokemonMock';

const mockStore = configureMockStore();
const store = mockStore({favoritePokemons: [{mockPokemon}]});

describe("App", () => {
  it("should mount app", () => {
     mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
