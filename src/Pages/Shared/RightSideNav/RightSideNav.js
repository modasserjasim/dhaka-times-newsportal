import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import BrandCarousel from '../../../components/BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { googleLogin } = useContext(AuthContext);


    const GoogleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleLogin(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <ButtonGroup className='w-100' vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='py-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> Linkedin</ListGroup.Item>
                    <ListGroup.Item><FaGoogle /> Google</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;