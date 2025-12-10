// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6VblT-sLsY0ZDQoYsacNO_tjeE3Nl7CM",
  authDomain: "portfolio-f983c.firebaseapp.com",
  projectId: "portfolio-f983c",
  storageBucket: "portfolio-f983c.firebasestorage.app",
  messagingSenderId: "13763671008",
  appId: "1:13763671008:web:faa7132f541b2168743185",
  measurementId: "G-6XJZGYP2L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 

export { analytics, database }; 
