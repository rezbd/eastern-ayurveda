import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <Form className="w-25 mx-auto">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button>Sign In</button>
            </Form>
            <button onClick={signInUsingGoogle} className="btn btn-primary mt-5">Sign In with Google</button>
        </div>
    );
};

export default Login;