import { Carousel } from 'react-bootstrap';
import QNACards from '../../components/QNACards/QNACards';
import useQNAs from '../../hooks/useQNAs';
import law1 from '../../images/law1.jpg';
import law2 from '../../images/law2.jpg';
import law3 from '../../images/law3.jpg';

const Blog = () => {
    const [qnas] = useQNAs();
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={law1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Consistency</h3>
                        <p className='text-center'>The first of the advantages of law is that it imparts uniformity and certainty to the administration of justice. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={law2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Importancy</h3>
                        <p className='text-center'>The law is made for no particular person or for no individual case and so admits no respect of persons, which is incompatible with justice.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={law3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Gentility</h3>
                        <p className='text-center'>The law serves to guard the administration of justice against the errors of individual judgement.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="row gap-3 container mx-auto">
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