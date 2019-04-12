const resolvers = {
  Query: {
    pokemon: async (root, { name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemon(name)
    },
    entries: async (root, { name }, { dataSources }) => {
      return dataSources.pokeAPI.getEntries(name)
    }
  },
  Pokemon: {
    name: ({ name }) => name
  },
  Entries: {
    flavor_text_entries: ({ flavor_text_entries }) => flavor_text_entries
  }
};

module.exports = resolvers;