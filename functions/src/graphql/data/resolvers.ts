// import { ApolloError, ValidationError } from 'apollo-server'
// import Version from './interface'
// import { firestore } from '../server'
// import Book from "./interface";
import { books } from "./data";

const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: any) => {
      return getBookByID(args.id);
    }
  }
};

function getBookByID(id: String) {
  console.log(books.find(book => book.id == id));

  return books.find(book => book.id == id);
}

export default resolvers;
