import * as admin from "firebase-admin";

admin.initializeApp();
const settings = { timestampsInSnapshots: true };
const firestore = admin.firestore();
firestore.settings(settings);

export default firestore;
