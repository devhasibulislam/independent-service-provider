import React, { useState } from 'react';
import myself from '../../images/myself.png';

const About = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='d-flex justify-content-between align-items-center flex-lg-row flex-column container mx-auto my-5'>
            <div className='px-5 w-100'>
                <h1 className='display-1'>About <br /> Me</h1>
                <article>
                    <p>
                        I want to build a JavaScript library like: React, Vue or Angular e.t.c. As a web developer, my core ambition is now make other developers life easy and flow less so that they can envoy with their own joy and make other happy. Even want to create top level site which can breakthrough others but contribution able interest. Contentional website is my target which I can refill soon. I'm aware about it.
                    </p>
                    {
                        readMore
                            ?
                            <button className='btn btn-success' onClick={() => setReadMore(!readMore)}>Read less</button>
                            :
                            <button className='btn btn-success' onClick={() => setReadMore(!readMore)}>Read more</button>
                    }
                    {
                        readMore
                            ?
                            <ol className='mt-3 ps-3'>
                                <li>Stay persistance with my goal</li>
                                <li>Convenience studiedly strategy</li>
                                <li>Turn leisure time in convention which is ultimatum to acheive my goal</li>
                                <li>Never give up prodigy</li>
                                <li>Listen more knowledgeable person than me</li>
                            </ol>
                            :
                            ''
                    }
                </article>
            </div>
            <div className='w-100'>
                <img src={myself} alt="myself" className='mw-100 w-100' />
            </div>
        </div>
    );
};

export default About;