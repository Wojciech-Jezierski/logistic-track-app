// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6T98ntMDtr4r0f_fmBuL-2kjoTJzJNTo",
  authDomain: "logistic-track-app.firebaseapp.com",
  projectId: "logistic-track-app",
  storageBucket: "logistic-track-app.appspot.com",
  messagingSenderId: "283581085353",
  appId: "1:283581085353:web:962177e4c11ed3f6069bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);