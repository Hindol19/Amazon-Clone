// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqrZMlcrVvsy8WsLCcis7_oBE9Ho0dPn8",
  authDomain: "clone-2f9b2.firebaseapp.com",
  projectId: "clone-2f9b2",
  storageBucket: "clone-2f9b2.appspot.com",
  messagingSenderId: "956467434008",
  appId: "1:956467434008:web:274e3a8ceb23e28729296d",
  measurementId: "G-99WNM7091Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//Real time firebase database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
