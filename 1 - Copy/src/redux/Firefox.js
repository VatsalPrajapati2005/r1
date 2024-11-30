// Shree Ganeshay namah 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDcKQhI3xs-6j5qCPqV-6J8kMLijvY_tsg",
  authDomain: "students-4158c.firebaseapp.com",
  projectId: "students-4158c",
  storageBucket: "students-4158c.firebasestorage.app",
  messagingSenderId: "841734431404",
  appId: "1:841734431404:web:10efda4c090f2be1ad3509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth