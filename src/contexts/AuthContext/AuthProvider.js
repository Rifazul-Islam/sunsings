import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase-config';

 export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const haddlarCreateUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const handlarSogin = (email,password)=>{
        setLoading(true)
              
        return signInWithEmailAndPassword(auth, email, password)
    }

    const lognOut = ()=>{
        setLoading(true);
      return signOut(auth)
 }


    useEffect(()=>{
             
        const unScrible = onAuthStateChanged(auth, (currentUser)=>{

           setUser(currentUser)
           setLoading(false)
        })
     return ()=> unScrible()
},[])

    const authInfo = {
       user,
       loading,
       haddlarCreateUser,
       handlarSogin,
       lognOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
              {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;