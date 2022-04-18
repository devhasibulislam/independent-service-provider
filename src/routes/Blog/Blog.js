import React, { useEffect, useState } from 'react';
import QNACards from '../../components/QNACards/QNACards';

const Blog = () => {
    const [qna, setqna] = useState([]);
    useEffect(() => {
        fetch('qna.json')
            .then(request => request.json())
            .then(response => setqna(response))
    }, [])
    return (
        <section className='container mx-auto'>
            <div className="row gap-3">
                {
                    qna.map(q => <QNACards
                        key={q.id}
                        q={q}
                    ></QNACards>)
                }
            </div>
        </section>
    );
};

export default Blog;