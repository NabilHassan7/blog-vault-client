import React, { useContext } from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    // importing the sign in function call from AuthProvider
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    
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
            navigate('/');
        })
        .catch(error => console.error(error))
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
            </Form>
        </div>
    );
};

export default Login;