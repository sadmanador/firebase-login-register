// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ix_SRH4JFIJCdeK3PKMQ7_4NAEBMdO0",
  authDomain: "login-register-email-password.firebaseapp.com",
  projectId: "login-register-email-password",
  storageBucket: "login-register-email-password.appspot.com",
  messagingSenderId: "367640612310",
  appId: "1:367640612310:web:317f837d7bb900ed72e877",
  measurementId: "G-FHNW89WT86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  app
}