// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmmnKf8lomncj7Sz0sNCDwwQJThA_wZs8",
  authDomain: "tareeq-df80b.firebaseapp.com",
  projectId: "tareeq-df80b",
  storageBucket: "tareeq-df80b.appspot.com",
  messagingSenderId: "609507972793",
  appId: "1:609507972793:web:b771f8e17189b07e9ced68",
  measurementId: "G-79Z9G3J397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);
