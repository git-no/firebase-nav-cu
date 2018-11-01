import { gql, makeExecutableSchema } from "apollo-server-express";
import resolvers from "./resolvers";

//  latestUpdateOfVersion(id: ID) Version
//  updateByCU:(version: ID, update: ID)
const typeDefs = gql`
  type Query {
    versions: [Version]
    version(id: ID!): Version
  }

  type Version {
    id: ID!
    title: String
    link: String
    updates(id: String): [Update]
  }
  type Update {
    id: ID
    buildNo: String
    kbNo: String
    link: String
    localization: [Localization]
    releaseDate: String
    title: String
    version: Version!
  }

  type Localization {
    id: ID
    downloadLink: String
    update: Update
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
