import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <section className='row gap-3 container mx-auto my-5'>
            {
                services.map(service => <Service
                    key={service.sid}
                    service={service}
                ></Service>)
            }
        </section>
    );
};

export default Services;