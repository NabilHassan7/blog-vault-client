import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // storing the logged in user
    const [user, setUser] = useState(null);
    // loading state to prevent reloads
    const [loading, setLoading] = useState(true);

    // creating login provider for GOOGLE
    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // user registration function using email and a password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signing in users using email and password
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function for GOOGLE
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // updating user profile information
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    // Observing user state change
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    // exporting to context
    const authInfo = {
        user, 
        providerLogin, 
        logOut, 
        createUser, 
        signIn, 
        loading,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
