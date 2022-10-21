// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDJ_rmfm0_aKcnLBPD3aBktx7OqqlgfzKw",
    authDomain: "dhaka-times.firebaseapp.com",
    projectId: "dhaka-times",
    storageBucket: "dhaka-times.appspot.com",
    messagingSenderId: "30578310599",
    appId: "1:30578310599:web:0a9a88fed1db5b23a7ede2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;