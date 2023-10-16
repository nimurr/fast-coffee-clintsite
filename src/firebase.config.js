// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaaTRj_6bfVdFmMQ-ShjT4Oh6sYDDb_2o",
  authDomain: "crud-coffee-project.firebaseapp.com",
  projectId: "crud-coffee-project",
  storageBucket: "crud-coffee-project.appspot.com",
  messagingSenderId: "951811580103",
  appId: "1:951811580103:web:cc9ac7f1a725e554189ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;