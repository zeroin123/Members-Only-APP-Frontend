import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSa4Va3QwAroV5KHf_uZanbG4RlYHEUUo",
  authDomain: "members-only-580d4.firebaseapp.com",
  projectId: "members-only-580d4",
  storageBucket: "members-only-580d4.firebasestorage.app",
  messagingSenderId: "732828089054",
  appId: "1:732828089054:web:7d885426c22c9a722f604f",
  measurementId: "G-PYH7ERR523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
