import { gql, makeExecutableSchema } from "apollo-server-express";
import resolvers from "./resolvers";
// import { books } from "./data";

const typeDefs = gql`
  type Query {
    versions: [Version]
    version(id: ID): Version
    # updateByCU:(version: ID, update: ID)
  }

  # This "Book" type can be used in other type declarations.
  type Version {
    id: ID
    title: String
    link: String
    updates(id: String): [Update]
  }

  type Update {
    id: ID
    title: String
    build: String
    link: String
    version: Version!
    # locations: [Location]
  }

  # type Location {
  #   id: ID
  #   downloadLink: String
  #   update: Update
  # }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
