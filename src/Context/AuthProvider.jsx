import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const RegisterAccount = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password) 
  }
  const LoginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const loginAccount_Google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  const updateProfie = (userUpdated) =>{
    return updateProfile(auth.currentUser, userUpdated)
  }
  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    }); 

    return () => unsubscribe();
  }, [onAuthStateChanged]);

  const authData = {
    user,
    setUser,
    RegisterAccount,
    LoginAccount,
    logout,
    loginAccount_Google,
    loading,
    setLoading,
    updateProfie
  }

  return <AuthContext value={authData}>{children}</AuthContext>

}

export default AuthProvider