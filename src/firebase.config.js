// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDafesLhF6BX6nKuzyUKm7tftNjeD0rd0A",
  authDomain: "fast-news-80a2e.firebaseapp.com",
  projectId: "fast-news-80a2e",
  storageBucket: "fast-news-80a2e.appspot.com",
  messagingSenderId: "139501638502",
  appId: "1:139501638502:web:5ab18461696ee675faeea7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;