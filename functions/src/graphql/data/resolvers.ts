// import { ApolloError, ValidationError } from 'apollo-server'
// import Version from './interface'
// import { firestore } from '../server'
import * as data from "./data";

const resolvers = {
  Query: {
    versions: () => data.data.Versions,
    version: (_: any, args: any) => {
      return data.findVersionOfID(args.id);
    }
  },

  Version: {
    updates(parent: any, args: any) {
      return data.findUpdateOfVersion(parent.id, args.id);
    }
  },
  Update: {
    localization(parent: any, args: any) {
      return data.findLocalizationOfUpdate(parent.id, args.id);
    }
  }
};

export default resolvers;
