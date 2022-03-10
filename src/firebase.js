import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "youdemy-bf703.firebaseapp.com",
  projectId: "youdemy-bf703",
  storageBucket: "youdemy-bf703.appspot.com",
  messagingSenderId: "819088802129",
  appId: "1:819088802129:web:b239c190070d3b74c71370",
  measurementId: "G-ZFWLJNYR0F"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };

export default firebase;
export const auth = firebase.auth();
