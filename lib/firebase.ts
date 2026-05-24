
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCeHJd0BtuOzyuKRdoMU6mhvAgSQBQOVxI",
  authDomain: "voltflow-eacb3.firebaseapp.com",
  projectId: "voltflow-eacb3",
  storageBucket: "voltflow-eacb3.firebasestorage.app",
  messagingSenderId: "364332599746",
  appId: "1:364332599746:web:2ffe67ed9bf7861faeae5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);
