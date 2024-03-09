
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAm5qfAjozye8LNOVreV8sLqyA_79ROZdU",
  authDomain: "taskplan-2623b.firebaseapp.com",
  projectId: "taskplan-2623b",
  storageBucket: "taskplan-2623b.appspot.com",
  messagingSenderId: "487766878338",
  appId: "1:487766878338:web:2467fd5b0d565495a9ac9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
