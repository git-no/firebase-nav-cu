import { gql, makeExecutableSchema } from 'apollo-server-express'
import resolvers from './resolvers'

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
`

export default makeExecutableSchema({
   typeDefs: typeDefs,
   resolvers
})