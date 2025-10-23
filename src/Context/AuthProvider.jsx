import React, { useState } from 'react'
import { createContext } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const RegisterAccount = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password) 
  }
  const LoginAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth);
  }

  const authData = {
    user,
    setUser,
    RegisterAccount,
    LoginAccount,
    logout
  }

  return <AuthContext value={authData}>{children}</AuthContext>

}

export default AuthProvider