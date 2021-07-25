const {ApolloServer} = require ('apollo-server');
const {mainCards, animals, categories} = require ('./db.js');
const typeDefs = require ('./schema.js');
const Query = require ('./resolvers/Query');
const Animal = require ('./resolvers/Animal');
const Category = require ('./resolvers/Category');

const resolvers = {
  Query,
  Animal,
  Category,
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer ({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen ().then (({url}) => {
  console.log (`🚀  Server ready at ${url}`);
});
