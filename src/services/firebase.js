// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwV1Jxosz-1TzbFqes10JSSCy9PTmdmio",
  authDomain: "sporteam-cwm-2023.firebaseapp.com",
  projectId: "sporteam-cwm-2023",
  storageBucket: "sporteam-cwm-2023.appspot.com",
  messagingSenderId: "919610938617",
  appId: "1:919610938617:web:ceead6d2d9b493afcdbe28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);