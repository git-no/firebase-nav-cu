import * as admin from 'firebase-admin'
admin.initializeApp()

const settings = {timestampsInSnapshots: true}
const firestore = admin.firestore()
firestore.settings(settings);

export { firestore, admin }

export * from './api/graph/graphql'
export * from './http'
