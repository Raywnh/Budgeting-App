// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARgtvAt_5qOH4bftRpJBYxruzc5y-NN3M",
  authDomain: "budgeting-app-55688.firebaseapp.com",
  projectId: "budgeting-app-55688",
  storageBucket: "budgeting-app-55688.appspot.com",
  messagingSenderId: "110242243466",
  appId: "1:110242243466:web:ecf6bd318b6269758f1e73",
  measurementId: "G-ERBFZH3LHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)