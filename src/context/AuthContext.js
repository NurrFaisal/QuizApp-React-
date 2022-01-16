import React, { useState, useContext, useEffect } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [Loading, setLoading] = useState(true);
  const [CurrentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  //signup function

  async function signup(email, password, usename) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: usename,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    CurrentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!Loading && children}
    </AuthContext.Provider>
  );
}
