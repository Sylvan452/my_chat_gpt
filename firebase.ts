import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGKppeX1dnaMP5B8F5RfPbDmwozh67AM",
  authDomain: "mychatgpt-ade30.firebaseapp.com",
  projectId: "mychatgpt-ade30",
  storageBucket: "mychatgpt-ade30.appspot.com",
  messagingSenderId: "393190061345",
  appId: "1:393190061345:web:43432d27f313840b697a60"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };