// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl4aQzQEl7_anTwWApp_6D-Tv1FuNzlf0",
  authDomain: "suitgame.firebaseapp.com",
  databaseURL: "https://suitgame-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suitgame",
  storageBucket: "suitgame.appspot.com",
  messagingSenderId: "509344433060",
  appId: "1:509344433060:web:c2fa59ad1f10c870a37731",
  measurementId: "G-NW7Y0LRDJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);