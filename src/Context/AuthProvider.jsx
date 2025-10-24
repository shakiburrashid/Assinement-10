import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';


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
    loading,
    setLoading
  }

  return <AuthContext value={authData}>{children}</AuthContext>

}

export default AuthProvider