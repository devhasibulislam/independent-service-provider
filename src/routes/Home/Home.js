import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import partner1 from '../../images/partner1.jpg';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.jpg';
import partner5 from '../../images/partner5.jpg';
import partner6 from '../../images/partner6.png';
import partner7 from '../../images/partner7.jpg';
import partner8 from '../../images/partner8.png';
import partner9 from '../../images/partner9.png';
import thumb1 from '../../images/thumb1.jpg';
import thumb2 from '../../images/thumb2.jpg';
import thumb3 from '../../images/thumb3.jpg';
import {ArrowNarrowRightIcon} from '@heroicons/react/outline';

const Home = () => {
    return (
        <section className='overflow-hidden'>
            <section className="hero text-center vh-100 vw-100 d-flex flex-column justify-content-center">
                <h2>Honest</h2>
                <span>treatment</span>
                <h2>Clear</h2>
                <span>advice</span>
                <h2>Smart</h2>
                <span>strategies</span>
                <Link to={'/about'}><button className='btn btn-success w-25 mx-auto rounded-pill mt-5'>Learn more
                    <ArrowNarrowRightIcon style={{height: '1.5rem', marginLeft: '5px'}}></ArrowNarrowRightIcon></button></Link>
            </section>
            <section className='container mx-auto my-5'>
                {/* partners */}
                <div>
                    <h2 className='common-header'># <span>My Partners</span></h2>
                    <div className='mt-4 partner'>
                        <img src={partner1} alt="partner-1" className='m-auto' />
                        <img src={partner2} alt="partner-2" className='m-auto' />
                        <img src={partner3} alt="partner-3" className='m-auto' />
                        <img src={partner4} alt="partner-4" className='m-auto' />
                        <img src={partner5} alt="partner-5" className='m-auto' />
                        <img src={partner6} alt="partner-6" className='m-auto' />
                        <img src={partner7} alt="partner-7" className='m-auto' />
                        <img src={partner8} alt="partner-8" className='m-auto' />
                        <img src={partner9} alt="partner-9" className='m-auto' />
                    </div>
                </div>
                {/* commitment */}
                <div className='my-5'>
                    <h2 className='common-header'># <span>I'll work for you</span></h2>
                    <article className='text-center mt-4'>
                        <p className='text-muted text-center'>
                            Employment laws are complicated, and they're changing every day.
                            We bring clarity, direction, and sense to employment disputes.
                            <br />
                            We advocate for individuals - employees, executives, and entrepreneurs.
                            <br />
                            We work to secure fair treatment in the workplace, and get results inside and outside of the courtroom.
                            Job problems are stressful enough.  Let us help you navigate.
                        </p>
                    </article>
                </div>
                {/* intro */}
                <div className='intro-line my-5'><hr /></div>
                <section className='d-flex flex-lg-row flex-column justify-content-between align-items-baseline'>
                    <div className='me-1 p-3'>
                        <img src={thumb3} alt="thumbnail-3" className='mw-100'/>
                        <h3 className='mt-3'>Criminal Cases</h3>
                        <p className='text-muted'>Criminal cases involve enforcing public codes of behavior, which are codified in the laws of the state. In criminal cases, the government prosecutes individuals for violating those laws (in other words, for allegedly committing a crime). Punishment in criminal cases can include fines, community service, probation, or prison.</p>
                        <Link to={'/checkout'}><button className='btn btn-success'>Add service</button></Link>
                    </div>
                    <div className='p-3 bg-light rounded'>
                        <img src={thumb2} alt="thumbnail-1" className='mw-100'/>
                        <h3 className='mt-3'>Civil Cases</h3>
                        <p className='text-muted'>Civil cases involve conflicts between people or institutions such as businesses, typically over money.Civil cases include lawsuits for money, landlord/tenant matters, breach of contract claims, and cases where one person is trying to make someone else do something (for example, sell some property) or stop doing something (for example, stop a foreclosure).</p>
                        <Link to={'/checkout'}><button className='btn btn-success'>Add service</button></Link>
                    </div>
                    <div className='ms-1 p-3'>
                        <img src={thumb1} alt="thumbnail-2" className='mw-100'/>
                        <h3 className='mt-3'>Family Cases</h3>
                        <p className='text-muted'>Family cases are a type of civil case, but they generally involve issues between or concerning spouses, parents, and children.Family courts handle a wide variety of cases involving domestic matters.The most common issues handled at family court include. Schedule your consultation online today - all in one step.  There's no need to wait for a call back, or to find out available dates.</p>
                        <Link to={'/checkout'}><button className='btn btn-success'>Add service</button></Link>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;