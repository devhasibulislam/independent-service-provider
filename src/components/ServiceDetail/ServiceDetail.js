import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    if (serviceId >= 1) {
        toast('Please, click on the Green Proceed  Button below!')
    }
    return (
        <div className='my-5 container mx-auto'>
            <h2>Service ID no: {serviceId}</h2>
            <Link to={'/checkout'}><button className='btn btn-success my-3'>Proceed to checkout</button></Link>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ServiceDetail;