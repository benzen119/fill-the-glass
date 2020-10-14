import firebase from 'firebase'
import Constants from 'expo-constants'

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messageSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementID,
}

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig)
