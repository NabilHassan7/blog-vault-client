// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6DWwnylSwDztcIDDYGTBs_u9GJkQQBMc",
  authDomain: "blog-vault.firebaseapp.com",
  projectId: "blog-vault",
  storageBucket: "blog-vault.appspot.com",
  messagingSenderId: "554413171952",
  appId: "1:554413171952:web:560ad49a4a2cfb9a304e35",
  measurementId: "G-T2DX4X9CXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporting the default app
export default app;