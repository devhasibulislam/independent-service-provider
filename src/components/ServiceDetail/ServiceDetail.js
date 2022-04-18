import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='my-5 container mx-auto'>
            <h2>This is ServiceDetail component: {serviceId}</h2>
            <Link to={'/checkout'}><button className='btn btn-success mt-3'>Proceed to checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;