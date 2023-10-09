// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZLjsbvC2_v5HQuC_R3JQe88q9xPYyizE",
  authDomain: "pms-1234-65f9b.firebaseapp.com",
  projectId: "pms-1234-65f9b",
  storageBucket: "pms-1234-65f9b.appspot.com",
  messagingSenderId: "1005148334949",
  appId: "1:1005148334949:web:7c8d05ebd89942c83f8f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {auth, db}