const {ApolloServer} = require ('apollo-server');
const {mainCards, animals, categories} = require ('./db.js');
const typeDefs = require ('./schema.js');
const Query = require ('./resolvers/Query');
const Animal = require ('./resolvers/Animal');
const Category = require ('./resolvers/Category');

const server = new ApolloServer ({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

server.listen ().then (({url}) => {
  console.log (`🚀  Server ready at ${url}`);
});
