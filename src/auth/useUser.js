import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useUser = () => {
  const [state, setState] = useState({
    isLoading: true,
    user: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setState({
        isLoading: false,
        user: currentUser,
      });
    });

    return () => unsubscribe();
  }, []);

  return state;
};