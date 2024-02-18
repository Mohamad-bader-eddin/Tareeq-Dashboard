// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP75hHBUiomD4WWhuEdyJiLmU3nbPS2c4",
  authDomain: "tareeq-31dae.firebaseapp.com",
  projectId: "tareeq-31dae",
  storageBucket: "tareeq-31dae.appspot.com",
  messagingSenderId: "98722968957",
  appId: "1:98722968957:web:e613c372727e0dd715c814",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);
