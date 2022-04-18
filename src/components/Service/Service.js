import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { sname, sdesc, simg, sid } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    };
    return (
        <div className='me-1 p-3 bg-light rounded'>
            <img src={simg} alt="thumbnail-3" className='mw-100 w-100' />
            <h3 className='mt-3'>{sname}</h3>
            <p className='text-muted'>{sdesc}</p>
            <button className='btn btn-success' onClick={() => navigateToServiceDetail(sid)}>Add service</button>
        </div>
    );
};

export default Service;