const { ApolloServer } = require('apollo-server');

const PokeAPI = require('./datasource');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');



const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      pokeAPI: new PokeAPI()
    }
  }
});

server.listen()
.then(({ url }) => {
  console.log(`Server ready at ${url}`)
})