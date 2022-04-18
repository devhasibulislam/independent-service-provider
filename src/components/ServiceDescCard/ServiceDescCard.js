import React from 'react';

const ServiceDescCard = ({service}) => {
    const { sname, sdesc, simg } = service;

    return (
        <div className='me-1 p-3 bg-light rounded'>
            <img src={simg} alt="thumbnail-3" className='mw-100 w-100' />
            <h3 className='mt-3'>{sname}</h3>
            <p className='text-muted'>{sdesc}</p>
        </div>
    );
};

export default ServiceDescCard;