import React from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    // Function to prevent reloading of the form
    const handleSubmit = event =>{
        event.preventDefault();
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
                
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            
        </div>
    );
};

export default Register;