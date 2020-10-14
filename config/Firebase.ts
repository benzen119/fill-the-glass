import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDkU3hvbD3kh3IYFwJapByGsrkpo5uZq4I",
  authDomain: "fill-the-glass.firebaseapp.com",
  databaseURL: "https://fill-the-glass.firebaseio.com",
  projectId: "fill-the-glass",
  storageBucket: "fill-the-glass.appspot.com",
  messagingSenderId: "2503615172",
  appId: "1:2503615172:web:65caa549d88aa23fe2df91",
  measurementId: "G-PM47DB5VZK"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
