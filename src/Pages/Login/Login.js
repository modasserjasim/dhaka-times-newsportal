import toast from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { loginWithEmail, setLoading } = useContext(AuthContext);

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log('you have logged in successfully', user);
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error('Please verify your email to login the website!')
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='bg-white shadow rounded p-5'>
            <h3>Login to access</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <h5 className='text-danger'>{error}</h5>
                <Button variant="primary" type="submit">
                    Login Now
                </Button>
            </Form>
        </div>
    );
};

export default Login;