// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABS8wH5Ec2tFuQXN37-Hao73U4aX9WY5E",
  authDomain: "pms-1234.firebaseapp.com",
  projectId: "pms-1234",
  storageBucket: "pms-1234.appspot.com",
  messagingSenderId: "406225477756",
  appId: "1:406225477756:web:4f1431ccece1e26d1fe9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {auth, db, storage}