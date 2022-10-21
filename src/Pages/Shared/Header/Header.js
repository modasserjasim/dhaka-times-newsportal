import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                console.log('Successfully logout');
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-black' to='/'>Dhaka Times</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-lg-center">
                        {
                            user?.uid ? <>
                                <img style={{ width: '40px', height: '40px', borderRadius: '50px' }} src={user?.photoURL} alt="user profile" />
                                <span>{user?.displayName}</span>
                                <Link onClick={handleLogOut} className="ms-2">Logout</Link>
                            </> : <>
                                <Link to='/register' className='pe-3'>Register</Link>
                                <Link to='/login' className='pe-3'>Login</Link>
                                <FaUser></FaUser>
                            </>
                        }
                        {/* <Nav.Link ><Link to='/register'>Register</Link> </Nav.Link>
                        <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link>
                            {
                                user?.photoURL ? <> <img style={{ width: '40px', height: '40px', borderRadius: '50px' }} src={user?.photoURL} alt="user profile" /> {user?.displayName}</> : <><FaUser></FaUser> {user?.displayName}</>
                            }
                        </Nav.Link> */}
                    </Nav>
                    <Nav className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;