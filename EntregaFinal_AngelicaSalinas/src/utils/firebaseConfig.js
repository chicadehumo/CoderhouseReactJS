// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVGqKXMjh35CvFCfsvwzuLb6lxGh8YFQg",
  authDomain: "maitristore-bc575.firebaseapp.com",
  projectId: "maitristore-bc575",
  storageBucket: "maitristore-bc575.appspot.com",
  messagingSenderId: "385161761370",
  appId: "1:385161761370:web:7dcd5fa76dd7b3e58ffe63",
  measurementId: "G-EQ5RJD02TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;