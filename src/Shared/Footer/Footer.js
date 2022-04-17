import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='text-white bg-dark py-2 text-center'>
            <p className='mb-0'><strong>Copyright ©  {year} </strong>All right reserved.</p>
        </section>
    );
};

export default Footer;