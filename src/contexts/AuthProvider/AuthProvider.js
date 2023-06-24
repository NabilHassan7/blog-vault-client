import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
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
    const authInfo = {user, providerLogin};
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
