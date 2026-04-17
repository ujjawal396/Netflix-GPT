// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQZDmmP4Flb8THuZkbg8WHurMHqGIa-4",
  authDomain: "streaming-app-22087.firebaseapp.com",
  projectId: "streaming-app-22087",
  storageBucket: "streaming-app-22087.firebasestorage.app",
  messagingSenderId: "296329508226",
  appId: "1:296329508226:web:5c93faea594b0f8a1e8b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
