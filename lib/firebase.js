
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfnZC9WYqscMiq8kprdOCDPoA6xHiLu3c",
  authDomain: "puzzle-koushik-49.firebaseapp.com",
  projectId: "puzzle-koushik-49",
  storageBucket: "puzzle-koushik-49.appspot.com",
  messagingSenderId: "729780575224",
  appId: "1:729780575224:web:ebbf30cb716dfe2dae540d",
  measurementId: "G-9ZMEG19MZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


// import * from firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyDfnZC9WYqscMiq8kprdOCDPoA6xHiLu3c",
//     authDomain: "puzzle-koushik-49.firebaseapp.com",
//     projectId: "puzzle-koushik-49",
//     storageBucket: "puzzle-koushik-49.appspot.com",
//     messagingSenderId: "729780575224",
//     appId: "1:729780575224:web:ebbf30cb716dfe2dae540d",
//     measurementId: "G-9ZMEG19MZC"
//   };


// initializeApp(firebaseConfig)


// const auth = auth()
// const db = database()

// export { auth, db }
