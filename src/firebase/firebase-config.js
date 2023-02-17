// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzTi3laPftWuCyvwP31K6wHMA4N75nv94",
  authDomain: "sunsigs.firebaseapp.com",
  projectId: "sunsigs",
  storageBucket: "sunsigs.appspot.com",
  messagingSenderId: "473146665462",
  appId: "1:473146665462:web:42f8738273d92f03de3fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;