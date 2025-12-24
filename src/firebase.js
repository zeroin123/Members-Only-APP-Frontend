import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
