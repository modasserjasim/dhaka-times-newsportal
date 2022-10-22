import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { registerUser, updateUserProfile, verifyEmail } = useContext(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.url.value;
        console.log(name, photoURL, email, password);

        registerUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('new registered user', user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address before login!')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            });
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    return (
        <div className='bg-white shadow rounded p-5'>
            <h3>Register today to get access</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>I agree with <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                <h5 className='text-danger'>{error}</h5>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register Now
                </Button>
            </Form>
        </div>
    );
};

export default Register;