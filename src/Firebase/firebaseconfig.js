// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANRNnVai4LKzST0vdBiOAspxfzGinVQTQ",
  authDomain: "flexi-yoga-app.firebaseapp.com",
  projectId: "flexi-yoga-app",
  storageBucket: "flexi-yoga-app.appspot.com",
  messagingSenderId: "854697267890",
  appId: "1:854697267890:web:63cd64114cfd7cdf152fab",
  measurementId: "G-W6PPY53JT2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };