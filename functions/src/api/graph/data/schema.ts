import {gql} from '../graphql'

export const typeDefs = gql`

   # Dynamics NAV Version
   type Version {
      """
      Description for field
      Supports **multi-line** description for your [API](http://example.com)!
      """
   id: ID!
   title: String!
   # Web URL to Microsoft documentation side
   supportLink: String
   }

   type Query {
   versions: [Version]
   }
`
