// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWr3cxWIxzQZVhbfy9bVNS0q2kk6hrE6A",
  authDomain: "email-password-auth-33fcd.firebaseapp.com",
  projectId: "email-password-auth-33fcd",
  storageBucket: "email-password-auth-33fcd.appspot.com",
  messagingSenderId: "909363754922",
  appId: "1:909363754922:web:fe677bab65456323bd9dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;