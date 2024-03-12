// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuYPLc4VZQNznuBxMdu_LU4-7EKe2A8U8",
  authDomain: "ciencia-555b5.firebaseapp.com",
  projectId: "ciencia-555b5",
  storageBucket: "ciencia-555b5.appspot.com",
  messagingSenderId: "852254470440",
  appId: "1:852254470440:web:511c5d49b8cdc8e5daa01d",
  measurementId: "G-H2HPJBTRQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);