// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVGRyX74dQY_K9BYeR2tEzvgPBrgukrw",
  authDomain: "terrific-chef.firebaseapp.com",
  projectId: "terrific-chef",
  storageBucket: "terrific-chef.appspot.com",
  messagingSenderId: "1041065848831",
  appId: "1:1041065848831:web:9c7d4710a5374c8a4fc1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app