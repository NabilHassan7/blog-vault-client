import React, { useContext, useState } from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    // checking for error state
    const [error, setError] = useState('');

    // state to check if the terms are accepted
    const [accepted, setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    // Function to prevent reloading of the form
    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURl.value;
        const email = form.email.value;
        const password = form.password.value;

        // Auth call to create user
        createUser(email, password)
        .then(result =>{
            // const user = result.user; 
            setError(''); // resets error
            form.reset(); // resets the form
        })
        .catch(
            error => {
                console.error(error);
                setError(error.message);
            }
        )
    }

    // Function to check if checkbox clicked
    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Name" required />   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL"type="text" placeholder="Enter Photo URL" />   
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter your email" required />   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter a Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
            
        </div>
    );
};

export default Register;