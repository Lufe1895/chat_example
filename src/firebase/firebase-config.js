import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyUZgxWjoXZ5wtCgGM5020uDzXXjNwI24",
  authDomain: "chat-prueba-173e5.firebaseapp.com",
  projectId: "chat-prueba-173e5",
  storageBucket: "chat-prueba-173e5.appspot.com",
  messagingSenderId: "236636127005",
  appId: "1:236636127005:web:37e8ec04bfeb73b1c36bf4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();