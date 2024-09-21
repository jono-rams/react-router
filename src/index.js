import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8A8L5u9bubloFUjFc-TgVERwoQEZxbWE",
  authDomain: "react-router-e5de0.firebaseapp.com",
  projectId: "react-router-e5de0",
  storageBucket: "react-router-e5de0.appspot.com",
  messagingSenderId: "594960857005",
  appId: "1:594960857005:web:5dce7ecb0c33045dc11324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)