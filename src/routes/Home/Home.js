import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section>
            <section className="hero text-center vh-100 vw-100 d-flex flex-column justify-content-center overflow-hidden">
                <h2>Honest</h2>
                <span>treatment</span>
                <h2>Clear</h2>
                <span>advice</span>
                <h2>Smart</h2>
                <span>strategies</span>
                <button className='btn btn-outline-light w-25 mx-auto rounded-pill mt-5'>Learn more</button>
            </section>
        </section>
    );
};

export default Home;