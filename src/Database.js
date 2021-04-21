import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsHCZSZU8grxbP24lLmuwNDYe0dBUFK70",
  authDomain: "todolist-9ec71.firebaseapp.com",
  projectId: "todolist-9ec71",
  storageBucket: "todolist-9ec71.appspot.com",
  messagingSenderId: "301460853570",
  appId: "1:301460853570:web:4c537907a082919c07eedb",
});

const db = firebaseApp.firestore();

export default db;
