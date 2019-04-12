const { RESTDataSource } = require('apollo-datasource-rest');

class PokeAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemon(name) {
    const result = await this.get(`pokemon/${name}`);
    return result;
  }

  async getEntries(name) {
    const result = await this.get(`pokemon-species/${name}`);
    return result;
  }
}

module.exports = PokeAPI;