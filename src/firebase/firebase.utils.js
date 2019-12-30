import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfeLkHsTnPZzMvYLtlgTvHHHPtio402-Q",
  authDomain: "crwn-db-2adf6.firebaseapp.com",
  databaseURL: "https://crwn-db-2adf6.firebaseio.com",
  projectId: "crwn-db-2adf6",
  storageBucket: "crwn-db-2adf6.appspot.com",
  messagingSenderId: "145867895941",
  appId: "1:145867895941:web:28f2973eb881c49b5b65ec",
  measurementId: "G-E24RKQ5XWH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
