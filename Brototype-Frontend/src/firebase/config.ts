// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBr_Me-KhZ9qnL3FSraJRXHSyUcNAaGhM",
  authDomain: "brototype-29983.firebaseapp.com",
  projectId: "brototype-29983",
  storageBucket: "brototype-29983.appspot.com",
  messagingSenderId: "780726046578",
  appId: "1:780726046578:web:3b75be4c393937287257eb",
  measurementId: "G-NDKCLMJV1D"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth}