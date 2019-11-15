import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4rjRRWEhQ8aAlW3PVRc48g4Q1JCCyCL0",
  authDomain: "shopdb-88594.firebaseapp.com",
  databaseURL: "https://shopdb-88594.firebaseio.com",
  projectId: "shopdb-88594",
  storageBucket: "shopdb-88594.appspot.com",
  messagingSenderId: "112121361798",
  appId: "1:112121361798:web:8aa6cb9399656891f76807",
  measurementId: "G-ZF4YEFXSJ8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
