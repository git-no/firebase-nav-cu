// import { Express } from 'express'
const express = require('express');
import { ApolloServer, gql } from 'apollo-server-express'
// import { makeExecutableSchema } from 'graphql-tools'
// const { ApolloServer, gql } = require('apollo-server-express');
// const { typeDefs, resolvers} = require('./schema')

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
// import { startServer } from './api/graphql/server'

admin.initializeApp()
const settings = { timestampsInSnapshots: true }
const firestore = admin.firestore()
firestore.settings(settings);



const setupGraphQLServer = () => {

   const app = express()


   const books = [
      {
         title: 'Harry Potter and the Chamber of Secrets',
         author: 'J.K. Rowling',
      },
      {
         title: 'Jurassic Park',
         author: 'Michael Crichton',
      },
   ];


   const typeDefs = gql` 
      # This "Book" type can be used in other type declarations.
      type Book {
         title: String
         author: String
      }
   
      # The "Query" type is the root of all GraphQL queries.
      # (A "Mutation" type will be covered later on.)
      type Query {
         books: [Book]
      }
   `;

   const resolvers = {
      Query: {
         books: () => books,
      },
   };

   // const schema = makeExecutableSchema({
   //    typeDefs,
   //    resolvers,
   // })


   // ApolloServer.use(
   //    "/graphql",
   //    bodyParser.json(),
   //    graphqlExpress({ schema, context: {} })
   // )

   // graphQLServer.use(
   //    "/graphiql",
   //    graphiqlExpress({ endpointURL: "/api/graphql" })
   // )

   // graphQLServer.use("/schema", (req, res) => {
   //    res.set("Content-Type", "text/plain")
   //    res.send(printSchema(schema))
   // })
   // graphQLServer.use(
   //    "/graphql",
   //    bodyParser.json(),
   //    graphqlExpress({ schema, context: {} })
   //  )

   // const graphQLServer = new ApolloServer({ schema: schema });
   const graphQLServer = new ApolloServer({ typeDefs, resolvers  });
   graphQLServer.applyMiddleware({ app, path: '/' })
   //  // This `listen` method launches a web-server.  Existing apps
   //  // can utilize middleware options, which we'll discuss later.
   // server.get("/api");
   // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)

   // app.listen() 
   return app
}

const graphServer = setupGraphQLServer()
export const api = functions.https.onRequest(graphServer)
// const graphServer = setupGraphQLServer()
// export const myhook = functions.https.onRequest(graphServer)
