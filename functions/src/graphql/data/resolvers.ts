// import { ApolloError, ValidationError } from 'apollo-server'
// import Version from './interface'
// import { firestore } from '../server'
// import Book from "./interface";
import * as data from "./data";

const resolvers = {
  Query: {
    versions: () => data.data.Versions,
    version: (_: any, args: any) => {
      return data.findVersionOfID(args.id);
    }
    // updates: () => {
    //   return data.data.Updates;
    // }
  },

  Version: {
    updates(parent: any, args: any) {
      return data.findUpdatesOfVersion(parent.id, args.id);
    }
    // locations(parent: any, args: any) {
    //   return data.findLocationOfUpdate(parent.id, args.id);
    // }
  }
  // Updates: {
  //   locations(parent: any, args: any) {
  //     return data.findLocationOfUpdate(parent.id, args.id);
  //   }
  // }
};

export default resolvers;
