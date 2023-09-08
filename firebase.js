// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCPNoKrcdSTdKwe5wIQjYieJWJ1ph0CIkg",
    authDomain: "clone-b80ab.firebaseapp.com",
    projectId: "clone-b80ab",
    storageBucket: "clone-b80ab.appspot.com",
    messagingSenderId: "302354675224",
    appId: "1:302354675224:web:ae8eb7a4a5390ab11cb56d",
    measurementId: "G-2MWBSH68LY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };