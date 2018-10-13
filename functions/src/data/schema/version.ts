// import { Timestamp } from "@google-cloud/firestore";

// export class Version {
//    id: String
//    // crawledTS: Timestamp
//    recentCUID: String 
//    supportLink: String
//    title: String
//    // updatedTS: Timestamp

//    // constructor (dimension: Number, innerRadius: Number){
//    //    this.id = dimension
//    //    this.innerRadius = innerRadius
//    // }}
// }

export interface Version {
   id: String
   title: String
   supportLink: String
}