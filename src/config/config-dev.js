// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuYPLc4VZQNznuBxMdu_LU4-7EKe2A8U8",
  authDomain: "ciencia-555b5.firebaseapp.com",
  databaseURL: "https://ciencia-555b5-default-rtdb.firebaseio.com",
  projectId: "ciencia-555b5",
  storageBucket: "ciencia-555b5.appspot.com",
  messagingSenderId: "852254470440",
  appId: "1:852254470440:web:511c5d49b8cdc8e5daa01d",
  measurementId: "G-H2HPJBTRQ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db }