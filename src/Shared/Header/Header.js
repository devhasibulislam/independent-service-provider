import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../components/CustomLink/CustomLink';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={CustomLink} to="/">
                    <img src={logo} alt="site-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                        {user ? <button className='btn btn-danger rounded-pill px-3' onClick={() => signOut(auth)}>Log out</button> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;