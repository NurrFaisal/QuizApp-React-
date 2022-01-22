import { initializeApp } from "firebase/app";

// firebase configuration

const app = initializeApp({
  // apiKey: process.env.REAT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyBuz8uLagpEsxLn8K5M-8RjOzTHtvhevuc",
  authDomain: "react-quiz-app---dev.firebaseapp.com",
  databaseURL:
    "https://react-quiz-app---dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-app---dev",
  storageBucket: "react-quiz-app---dev.appspot.com",
  messagingSenderId: "603507844511",
  appId: "1:603507844511:web:ce70f97c94dc5a969449aa",
});

export default app;
