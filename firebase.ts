
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5QykEjHrsXmWkHUfLy0JS3AaqAuwG3mI",
    authDomain: "fir-auth-6471a.firebaseapp.com",
    projectId: "fir-auth-6471a",
    storageBucket: "fir-auth-6471a.appspot.com",
    messagingSenderId: "462720633650",
    appId: "1:462720633650:web:cc2a61584677e3e97ba52b",
    measurementId: "G-94K1ZV1YP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create a database instance
const database = getFirestore(app);

const auth = getAuth();

export default app;
export { auth, database }