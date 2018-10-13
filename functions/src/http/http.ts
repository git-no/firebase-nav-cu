import * as functions from 'firebase-functions';
// import { firestore } from '..'
// import { VERSIONS } from '../cons'
// import { getVersions } from '../database';

export const ping = functions.https.onRequest((request, response) => {
   response.send("OK");
});


// async function getVersions_() {
//    const version = await firestore.collection(VERSIONS).get()
//    return version
//    // return await firestore.collection("version").get()
// }


// export const versionList = functions.https.onRequest(async (request, response) => {
//   try {
//     getVersions_()
//     //  const snapshot = await firestore.collection(VERSIONS).get()
//     //  const doc = snapshot.data()

//     //  await firestore.collection(VERSIONS).doc("11").set(doc)
//     //  console.log(doc)
//      response.send("OK")

//   } catch (error) {
//     console.log(error)
//     response.status(500).send(error)
//   }
//   //  const version = getVersions()
// })

// export const addFirestore = functions.https.onRequest((request, response) => {
//   //  firestore.collection("versions")
//   //     .get()
//   //     .then(querySnapshot => {
//   //        querySnapshot.forEach(doc => {
//   //           console.log(doc.id, " => ", doc.data())
//   //        })
//   //     })
//   //     .catch(error => {
//   //        console.log("error getting documents: ", error)
//   //     })
//   //  response.send("Firestore Test!");

//   });


// export const crawl = functions.https.onRequest((request, response) => {
   
//    console.log("crawl start")


//    console.log("crawl fetching cu from MS")

//    console.log("crawl updating db")

//    console.log("crawl end")

//    // atomic save
//    response.send("OK");
// });
