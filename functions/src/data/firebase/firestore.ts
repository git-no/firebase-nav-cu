// import { firestore } from '../..'
// import { VERSIONS } from '../../cons'

// - does cu of version exists?


// async function version(version: string, cu: string) {
//    return await findCumulativeUpdate(version, cu)
// }

// hat keine function, löschen
// export async function getVersions() {
//    const snapshot = await firestore.collection(VERSIONS).get()
//    const ss = snapshot.size
//    return true
// }

// async function findVersion(version: string, cu: string) {
//    return firestore.collection("version").doc(version).get()
// }

// function findCumulativeUpdate(version: string, cu: string) {
//    return firestore.collection("version").doc(cu).collection("cu").doc(cu).get()
// }



// - recent build of version
// - get download link (version, country, build)
