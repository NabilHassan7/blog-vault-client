import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // storing the logged in user
    const [user, setUser] = useState(null);

    // creating login provider for GOOGLE
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    // user registration function using email and a password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signing in users using email and password
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function for GOOGLE
    const logOut = () =>{
        return signOut(auth);
    }

    // Observing user state change
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    // exporting to context
    const authInfo = {user, providerLogin, logOut, createUser, signIn};

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
