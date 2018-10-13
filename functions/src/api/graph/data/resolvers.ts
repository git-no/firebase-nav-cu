import {firestore} from '../../../'
import {Version} from '../../../data/schema'
import {ApolloError} from '../graphql'

export const resolvers = {
   Query: {
     async versions() {
       try {
         const versions = await firestore
            .collection("versions")
            .get()
         return versions.docs.map(version => version.data()) as Version[];
       } catch (error) {
         throw new ApolloError(error);
       }
     }
   }
 }
