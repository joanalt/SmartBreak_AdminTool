// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpbnNN3XHdBJSeod-d0eNbLUGqYTPvsFw",
  authDomain: "smartbreak-fdb23.firebaseapp.com",
  projectId: "smartbreak-fdb23",
  storageBucket: "smartbreak-fdb23.appspot.com",
  messagingSenderId: "11410639967",
  appId: "1:11410639967:web:136126abf07b279ec81fea",
  measurementId: "G-5QDKCQ13NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
