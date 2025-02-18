import { PokemonCatalogComponentDriver } from "@components/pokemon-catalog/pokemon-catalog.component.driver";
import { PokemonList } from "@services/pokemon.service";
import { CypressHelper } from "@shellygo/cypress-test-utils";

export class PokemonPageDriver {
  private helper: CypressHelper = new CypressHelper();
  private pokemonDriver: PokemonCatalogComponentDriver =
    new PokemonCatalogComponentDriver();

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    this.pokemonDriver.beforeAndAfter();
  };
  given = {
    fetchPokemonResponse: (response: PokemonList) =>
      this.helper.given.interceptAndMockResponse({
        url: "https://pokeapi.co/api/v2/pokemon**",
        response,
        alias: "pokemon"
      }),

    fetchImageResponse: (fileName: string) =>
      this.helper.given.interceptAndMockResponse({
        url: "/**/PokeAPI/sprites/**",
        response: { fixture: fileName },
        alias: "pokemon"
      })
  };

  when = {
    ...this.pokemonDriver.when
  };

  get = {
    ...this.pokemonDriver.get
  };
}
