import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const SignInWithGoogle = () => {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log("Successfully signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogle;
