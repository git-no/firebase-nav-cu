// const express = require("express");
// import { ApolloServer } from "apollo-server-express";
// import schema from "./data/schema";
// import * as functions from "firebase-functions";

// export const setupGraphQLServer = async () => {
//   const app = express();
//   const path = "/";

//   const graphQLServer = new ApolloServer({ schema });
//   graphQLServer.applyMiddleware({ app, path });

//   return app;
// };

// export const graphServer = setupGraphQLServer();
// export const api = functions.https.onRequest(graphServer);
