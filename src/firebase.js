// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eEPE-ReAUSsZ3RPrFQpspUExatEcVIc",
  authDomain: "abhijitdubey-9330383880.firebaseapp.com",
  projectId: "abhijitdubey-9330383880",
  storageBucket: "abhijitdubey-9330383880.appspot.com",
  messagingSenderId: "430096985478",
  appId: "1:430096985478:web:5509f1b80a53981dff9007",
  measurementId: "G-9YM4FMBBBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);