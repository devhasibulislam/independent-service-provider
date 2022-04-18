import React from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Service component</h2>
        </div>
    );
};

export default Service;