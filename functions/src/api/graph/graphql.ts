import * as functions from 'firebase-functions'
import 'firebase-functions'
import { config } from 'firebase-functions'
import {resolvers, typeDefs} from './data'

const { ApolloServer, ApolloError, gql, ValidationError } = require('apollo-server-express');
const express = require('express');

export default { ApolloServer, ApolloError, gql, ValidationError }

export const typeDefs = gql`

const server = new ApolloServer({
   typeDefs,
   resolvers,
   // engine: {
   //   apiKey: apolloAPIKey
   // },
   introspection: true
})

const app = express();
server.applyMiddleware({ app, path: '/' });
export const graphql = functions.https.onRequest(app);
