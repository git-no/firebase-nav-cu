// // export { api } from "./graphql/server";

import schema from "./graphql/data/schema";

// const { ApolloServer } = require("apollo-server");
// // Construct a schema, using GraphQL schema language

// const server = new ApolloServer({ schema });
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

const { ApolloServer } = require("apollo-server");

const loadServer = async () => {
  // In the most basic sense, the ApolloServer can be started
  // by passing type definitions (typeDefs) and the resolvers
  // responsible for fetching the data for those types.
  const server = new ApolloServer({ schema });

  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  return server.listen();
};

loadServer();
