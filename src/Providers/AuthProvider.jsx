/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // 01 make user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

    // 02 update profile
  };
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // 03 google sign in

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // 04 login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //05 logout user
  const logout = () => {
    return signOut(auth);
  };

  // 06  observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observing current user inside useEffect", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    handleUpdateProfile,
    logout,
    loading,
    GoogleSignIn,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
