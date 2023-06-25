import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// importing from react-bootstrap
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {

    // checking for loading
    // importing from Authprovider
    const {user, loading} = useContext(AuthContext);
    
    // storing the location before attempting to login
    const location = useLocation();

    // shows a spinner in case of loading
    if(loading){
       return  <Spinner animation="border" variant="danger" />;
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;