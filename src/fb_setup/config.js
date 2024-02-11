// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "notes-77e06.firebaseapp.com",
  projectId: "notes-77e06",
  storageBucket: "notes-77e06.appspot.com",
  messagingSenderId: "334397759520",
  appId: "1:334397759520:web:2384c17eb9312976a7dc45",
  measurementId: "G-3YPM5SSC42"
};

// Initialize Firebase
console.log()
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

