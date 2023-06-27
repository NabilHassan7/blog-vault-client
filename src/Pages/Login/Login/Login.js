import React, { useContext, useState } from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Login = () => {
    // state to store error
    const [error, setError] = useState('');

    // importing the sign in function call from AuthProvider
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    // retrieve location
    const location = useLocation();
    // set return address
    const from = location.state?.from?.pathname || '/';
    
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // function call to log in user
        signIn(email, password)
        .then(result =>{
            const user = result.user; 
            form.reset(); // resets the form
            setError(''); // cleans error
            // checking email verification
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error("Your email is verified. Please verify your email address.");
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => {
            setLoading(false); // prevents loading if the user is not logged in
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>
                    <Form.Text className='text-danger fw-bold'>
                        {error}
                    </Form.Text>
                </p>
            </Form>
        </div>
    );
};

export default Login;