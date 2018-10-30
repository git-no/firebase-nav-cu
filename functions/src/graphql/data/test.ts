// import { values } from "lodash";
// import { Kind, GraphQLScalarType } from "graphql";
// import { makeExecutableSchema } from "graphql-tools";

// const sampleData = {
//   Booking: {
//     b1: {
//       id: "b1",
//       propertyId: "p1",
//       customerId: "c1",
//       startTime: "2016-05-04",
//       endTime: "2016-06-03"
//     },
//     b2: {
//       id: "b2",
//       propertyId: "p1",
//       customerId: "c2",
//       startTime: "2016-06-04",
//       endTime: "2016-07-03"
//     },
//     b3: {
//       id: "b3",
//       propertyId: "p1",
//       customerId: "c3",
//       startTime: "2016-08-04",
//       endTime: "2016-09-03"
//     },
//     b4: {
//       id: "b4",
//       propertyId: "p2",
//       customerId: "c1",
//       startTime: "2016-10-04",
//       endTime: "2016-10-03"
//     }
//   },

//   Customer: {
//     c1: {
//       id: "c1",
//       email: "examplec1@example.com",
//       name: "Exampler Customer",
//       vehicleId: "v1"
//     },
//     c2: {
//       id: "c2",
//       email: "examplec2@example.com",
//       name: "Joe Doe",
//       vehicleId: "v2"
//     },
//     c3: {
//       id: "c3",
//       email: "examplec3@example.com",
//       name: "Liisa Esimerki",
//       address: "Esimerkikatu 1 A 77, 99999 Kyyjarvi"
//     }
//   },

//   Vehicle: {
//     v1: {
//       id: "v1",
//       bikeType: "MOUNTAIN"
//     },
//     v2: {
//       id: "v2",
//       licensePlate: "GRAPHQL"
//     }
//   }
// };

// function coerceString(value) {
//   if (Array.isArray(value)) {
//     throw new TypeError(
//       `String cannot represent an array value: [${String(value)}]`
//     );
//   }
//   return String(value);
// }

// const DateTime = new GraphQLScalarType({
//   name: "DateTime",
//   description: "Simple fake datetime",
//   serialize: coerceString,
//   parseValue: coerceString,
//   parseLiteral(ast) {
//     return ast.kind === Kind.STRING ? ast.value : null;
//   }
// });

// const addressTypeDef = `
//   type Address {
//     street: String
//     city: String
//     state: String
//     zip: String
//   }
// `;

// const customerAddressTypeDef = `
//   type Customer implements Person {
//     id: ID!
//     email: String!
//     name: String!
//     address: Address
//     bookings(limit: Int): [Booking!]
//     vehicle: Vehicle
//   }
// `;

// const bookingRootTypeDefs = `
//   scalar DateTime

//   type Booking {
//     id: ID!
//     propertyId: ID!
//     customer: Customer!
//     startTime: String!
//     endTime: String!
//   }

//   interface Person {
//     id: ID!
//     name: String!
//   }

//   union Vehicle = Bike | Car

//   type Bike {
//     id: ID!
//     bikeType: String
//   }

//   type Car {
//     id: ID!
//     licensePlate: String
//   }

//   type Query {
//     bookingById(id: ID!): Booking
//     bookingsByPropertyId(propertyId: ID!, limit: Int): [Booking!]
//     customerById(id: ID!): Customer
//     bookings(limit: Int): [Booking!]
//     customers(limit: Int): [Customer!]
//   }

//   input BookingInput {
//     propertyId: ID!
//     customerId: ID!
//     startTime: DateTime!
//     endTime: DateTime!
//   }

//   type Mutation {
//     addBooking(input: BookingInput): Booking
//   }
// `;

// const bookingAddressTypeDefs = `
//   ${addressTypeDef}
//   ${customerAddressTypeDef}
//   ${bookingRootTypeDefs}
// `;

// const bookingResolvers = {
//   Query: {
//     bookingById(parent, { id }) {
//       return sampleData.Booking[id];
//     },
//     bookingsByPropertyId(parent, { propertyId, limit }) {
//       const list = values(sampleData.Booking).filter(
//         booking => booking.propertyId === propertyId
//       );
//       if (limit) {
//         return list.slice(0, limit);
//       } else {
//         return list;
//       }
//     },
//     customerById(parent, { id }) {
//       return sampleData.Customer[id];
//     },
//     bookings(parent, { limit }) {
//       const list = values(sampleData.Booking);
//       if (limit) {
//         return list.slice(0, limit);
//       } else {
//         return list;
//       }
//     },
//     customers(parent, { limit }) {
//       const list = values(sampleData.Customer);
//       if (limit) {
//         return list.slice(0, limit);
//       } else {
//         return list;
//       }
//     }
//   },

//   Mutation: {
//     addBooking(
//       parent,
//       { input: { propertyId, customerId, startTime, endTime } }
//     ) {
//       return {
//         id: "newId",
//         propertyId,
//         customerId,
//         startTime,
//         endTime
//       };
//     }
//   },

//   Booking: {
//     customer(parent) {
//       return sampleData.Customer[parent.customerId];
//     }
//   },

//   Customer: {
//     bookings(parent) {
//       return values(sampleData.Booking).filter(
//         booking => booking.customerId === parent.id
//       );
//     },
//     vehicle(parent) {
//       return sampleData.Vehicle[parent.vehicleId];
//     }
//   },

//   Vehicle: {
//     __resolveType(parent) {
//       if (parent.licensePlate) {
//         return "Car";
//       } else if (parent.bikeType) {
//         return "Bike";
//       } else {
//         throw new Error("Could not resolve Vehicle type");
//       }
//     }
//   },

//   DateTime
// };

// export const schema = makeExecutableSchema({
//   typeDefs: bookingAddressTypeDefs,
//   resolvers: bookingResolvers
// });
