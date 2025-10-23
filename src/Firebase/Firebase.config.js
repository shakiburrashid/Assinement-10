// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuDfYRJr_GSRGdUAlggLrjWUIg8SI21Js",
  authDomain: "learn24-7.firebaseapp.com",
  projectId: "learn24-7",
  storageBucket: "learn24-7.firebasestorage.app",
  messagingSenderId: "508458987249",
  appId: "1:508458987249:web:edc4d5f9134a98eb164350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);