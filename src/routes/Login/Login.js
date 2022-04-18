import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [
        signInWithFacebook,
        fbUser,
        fbLoading,
        fbError
    ] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    if (user) {
        console.log(user.user);
        navigate(from, { replace: true });
    }

    if (fbUser) {
        navigate(from, {replace: true});
    }

    if (fbLoading) {
        return <div>
            <p className='text-info'>Loading...</p>
        </div>
    }

    if (fbError) {
        return <div>
            <p>{fbError.message}</p>
        </div>
    }

    const handleSubmitLoginForm = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        // console.log(user);
    };

    return (
        <>
            <div className='w-100  vh-100 login-form  d-flex align-items-center '>

                <div className='login-box mx-auto '>

                    <h2 className='text-center display-1 text-white'>Login Page!</h2>
                    <Form className='form-container' onSubmit={handleSubmitLoginForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} required />
                        </Form.Group>
                        <input type="submit" value="Login" />
                        {loading && <p className='text-success fw-bold'>Loading...</p>}
                        {error && <p className='text-danger fw-bold'>{error.message}</p>}
                    </Form>
                    <div className='text-center'>
                        <p className='mt-3 mb-0 text-white'>Forgot password? <span role="button">
                            <Link to={'/reset'} className='text-danger'>reset this</Link>
                        </span></p>
                        <p className='text-white'>Don't have an account? <span role="button">
                            <Link to={'/register'} className='text-info fw-bold'>create one</Link>
                        </span></p>
                    </div>
                    <p className='alternative mt-4'>or</p>
                    <button className='btn btn-primary w-100 mt-2' onClick={() => signInWithFacebook()}>
                        <i className="fa fa-facebook me-2" aria-hidden="true"></i>
                        Login with facebook
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;