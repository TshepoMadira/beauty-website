// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN3cNNT0Mbh6kahs88otDxt6hM0ALfMBQ",
  authDomain: "beauty-website-53d46.firebaseapp.com",
  projectId: "beauty-website-53d46",
  storageBucket: "beauty-website-53d46.firebasestorage.app",
  messagingSenderId: "406695612556",
  appId: "1:406695612556:web:e6815326a26bfb5d53eba9",
  measurementId: "G-HBTBT2JNRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);