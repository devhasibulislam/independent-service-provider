import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    if (sending) {
        return <div>
            <p>Sending...</p>
        </div>
    }

    if (error) {
        return <div>
            <p>{error.message}</p>
        </div>
    }

    const handleResetSubmitForm = async (event) => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent to entered email')
        }
    };

    return (
        <>
            <div className='w-100  vh-100 login-form  d-flex align-items-center '>

                <div className='login-box mx-auto '>

                    <h2 className='text-center display-1 text-white'>Reset Page!</h2>
                    <Form className='form-container' onSubmit={handleResetSubmitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" required onChange={event => setEmail(event.target.value)} />
                        </Form.Group>
                        <input type="submit" value="Reset" />
                    </Form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Register;