
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFLR3hPgJzHWMzrB6_HguGbIfAQ8U_gag",
  authDomain: "assignment11-51e35.firebaseapp.com",
  projectId: "assignment11-51e35",
  storageBucket: "assignment11-51e35.firebasestorage.app",
  messagingSenderId: "175004326218",
  appId: "1:175004326218:web:15cb09ebb04a1dd3a349b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth