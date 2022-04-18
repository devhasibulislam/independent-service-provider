import QNACards from '../../components/QNACards/QNACards';
import useQNAs from '../../hooks/useQNAs';

const Blog = () => {
    const [qnas] = useQNAs();
    return (
        <section className='container mx-auto'>
            <div className="row gap-3">
                {
                    qnas.slice(0, 3).map(qna => <QNACards
                        key={qna.id}
                        q={qna}
                    ></QNACards>)
                }
            </div>
        </section>
    );
};

export default Blog;