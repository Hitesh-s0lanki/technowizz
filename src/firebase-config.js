// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9mUszdU-XqF3gnEPe_b6zoXWmaLxah14",
  authDomain: "codetech-b3af2.firebaseapp.com",
  databaseURL: "https://codetech-b3af2-default-rtdb.firebaseio.com",
  projectId: "codetech-b3af2",
  storageBucket: "codetech-b3af2.appspot.com",
  messagingSenderId: "16307324730",
  appId: "1:16307324730:web:2bcbbe1ddba755fe7cf203",
  measurementId: "G-16SSCSQ5ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
