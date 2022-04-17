import React, { useState } from 'react';
import myself from '../../images/myself.png';

const About = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='d-flex justify-content-between align-items-center container mx-auto my-5'>
            <div className='px-5'>
                <h1 className='display-1'>About <br /> Me</h1>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur quam autem tenetur adipisci alias, dignissimos ut fugiat sunt similique sed iste tempore suscipit ipsum animi debitis voluptatum qui est!
                    </p>
                    <button className='btn btn-primary' onClick={() => setReadMore(!readMore)}>Read more</button>
                    {
                        readMore
                            ?
                            <ol className='mt-3 ps-3'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, fuga.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolorem?</li>
                            </ol>
                            :
                            ''
                    }
                </article>
            </div>
            <div>
                <img src={myself} alt="myself" className='mw-100 w-100' />
            </div>
        </div>
    );
};

export default About;