import React, { useState } from 'react';
import {ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/outline';

const QNACards = ({ q }) => {
    const { question, answer } = q;
    const [expand, setExpand] = useState(false);
    return (
        <div className='col d-flex flex-column justify-content-between my-5 bg-light p-3 rounded'>
            <h2>{question}</h2>
            <div className='mt-3'>
                {
                    expand
                    ?
                    <button className='btn btn-success mb-3' onClick={() => setExpand(!expand)}>Hide answer <ArrowUpIcon style={{height: '15px'}} /></button>
                    :
                        <button className='btn btn-success mb-3' onClick={() => setExpand(!expand)}>See answer <ArrowDownIcon style={{ height: '15px' }} /></button>
                }
                {expand ? <p>{answer}</p> : ''}
            </div>
        </div>
    );
};

export default QNACards;