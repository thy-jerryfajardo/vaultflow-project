
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAQgHSq3CeDszy_UPnbdc_Nyo3T4DH0B0",
  authDomain: "sunnsafe-76140.firebaseapp.com",
  projectId: "sunnsafe-76140",
  storageBucket: "sunnsafe-76140.firebasestorage.app",
  messagingSenderId: "523352448723",
  appId: "1:523352448723:web:2a73d1ca031bfe9977be26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);
