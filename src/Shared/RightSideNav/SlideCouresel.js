import Carousel from 'react-bootstrap/Carousel';

function SlideCouresel() {
    return (
        <Carousel>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.bastidoresdatv.com.br/wp-content/uploads/2022/08/Band-News.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideCouresel;