// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase = require("firebase/compat/app");
require("firebase/compat/auth");



const firebaseConfig = {
  apiKey: "AIzaSyBmNyPuwQps8IbT_R3FaezUPGkPBAeohAU",
  authDomain: "istambekov-e6576.firebaseapp.com",
  projectId: "istambekov-e6576",
  storageBucket: "istambekov-e6576.appspot.com",
  messagingSenderId: "892550047847",
  appId: "1:892550047847:web:1b5b32ab2d92cb1abb0cc2",
  measurementId: "G-6ED26BFXV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);