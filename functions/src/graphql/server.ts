const express = require("express");
import { ApolloServer } from "apollo-server-express";
import schema from "./data/schema";
import * as functions from "firebase-functions";

export const setupGraphQLServer = () => {
  const app = express();
  const path = "/";

  const graphQLServer = new ApolloServer({ schema });
  graphQLServer.applyMiddleware({ app, path });

  return app;
};

const graphServer = setupGraphQLServer();
export const api = functions.https.onRequest(graphServer);
