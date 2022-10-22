import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditProfile = () => {
    const { user } = useContext(AuthContext);

    const handleEditUser = () => {


    }
    return (
        <div className='bg-white shadow rounded p-5'>
            <h3>Update your profile</h3>
            <Form onSubmit={handleEditUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control defaultValue={user?.displayName} type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control defaultValue={user?.photoURL} type="text" name='url' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control defaultValue={user?.password} type="password" name='password' placeholder="Password" />
                </Form.Group>
                {/* <h5 className='text-danger'>{error}</h5> */}
                <Button
                    variant="primary" type="submit">
                    Update Profile
                </Button>
            </Form>
        </div>
    );
};

export default EditProfile;