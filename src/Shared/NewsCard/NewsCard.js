import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { _id, author, details, image_url, total_view, rating, title } = news;
    // console.log(author);
    const { img: author_img, name: author_name, published_date } = author;
    // console.log(news)
    return (
        <div className='mb-5'>
            <Card className="">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <Image src={author_img} style={{ height: '65px' }} roundedCircle></Image>
                            </div>
                            <div className='ms-2'>
                                <h6>{author_name}</h6>
                                <span>{published_date}</span>
                            </div>
                        </div>
                        <div>
                            <BsBookmark />
                            <BsFillShareFill className='ms-3' />
                        </div>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='mt-3'>
                        {details.length > 250 ?
                            <span>{details.slice(0, 250) +'...'} <Link to={`/news/${_id}`}>Read More</Link></span>
                            :
                            <span>{details}</span>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-2' />
                            <span>{rating?.number}</span>
                        </div>

                        <div className='d-flex align-items-center'>
                            <FaEye className='me-2 text-dark' />
                            <span>{total_view}</span>
                        </div>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;