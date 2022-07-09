// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBBpmOk_0u5baHe2zkTFxICTvsIya6Frws",
  authDomain: "pinto-52dda.firebaseapp.com",
  databaseURL: "https://pinto-52dda.firebaseio.com",
  projectId: "pinto-52dda",
  storageBucket: "pinto-52dda.appspot.com",
  messagingSenderId: "697838342406",
  appId: "1:697838342406:web:a3cfdf911a487ad4e00e87",
  measurementId: "G-0YQQ8CNTNN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
