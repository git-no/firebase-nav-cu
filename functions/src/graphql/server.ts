// import { Express } from 'express'
const express = require('express');
import { ApolloServer } from 'apollo-server-express'
import schema from './data/schema'
// const { typeDefs, resolvers} = require('./schema')
// import { startServer } from './api/graphql/server'

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()
const settings = { timestampsInSnapshots: true }
const firestore = admin.firestore()
firestore.settings(settings);

const setupGraphQLServer = () => {

   const app = express()
   const path = '/'

   const graphQLServer = new ApolloServer({ schema: schema  });
   graphQLServer.applyMiddleware({ app, path: path })

   return app
}

export const graphServer = setupGraphQLServer()
export const api = functions.https.onRequest(graphServer)
// const graphServer = setupGraphQLServer()
// export const myhook = functions.https.onRequest(graphServer)
