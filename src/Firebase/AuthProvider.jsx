import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase";

  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    let [userInformation, setUserInformation] = useState(null);
    let [afterDelete, setAfterDelete] = useState([]);
    let [loading, setLoading] = useState(true);
  
    const registerUser = async (email, password, displayName, photoURL) => {
      let signup = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(signup.user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      return signup;
    };
  
    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signoutUser = () => {
      return signOut(auth);
    };
  
    const provider = new GoogleAuthProvider();
    const SignInGoogle = () => {
      return signInWithPopup(auth, provider);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUserInformation(user);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    let obj = {
      name: "bd",
      registerUser,
      loginUser,
      userInformation,
      loading,
      setLoading,
      setUserInformation,
      signoutUser,
      afterDelete,
      setAfterDelete,
      SignInGoogle,
    };
    return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;
  