import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const NavBar = ({user}) => {
  const navigate = useNavigate();
  const onClickSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="app-heading">Members-Only App</h1>
      </Link>
        {user
            ?(
            <>
            <button
                className="sign-out-button"
                onClick={onClickSignOut}
            > Sign Out</button>
            <p className="logged-in-as space-before">Logged in as {user.email}</p>
            </>
            )
            :(null)
        }
    </nav>
  );
};
