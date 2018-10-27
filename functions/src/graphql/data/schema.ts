import { gql, makeExecutableSchema } from "apollo-server-express";
import resolvers from "./resolvers";
// import { books } from "./data";

const typeDefs = gql`
  type Query {
    books: [Book]
    book(id: ID): Book
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    id: ID
    title: String
    author: String
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});

// function getBooks() {
//   return [Book];
// }
