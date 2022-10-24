import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NewsDetails = () => {
    const news = useLoaderData();

    const { author, details, image_url, rating, title, category_id } = news;
    // console.log(news);
    const { name: author_name, published_date } = author;

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center my-4'>
                        <div className='d-flex align-items-center'>
                            <h6 className='mb-0 me-2'>Author: </h6>
                            <span>{author_name}</span>
                        </div>

                        <div className='d-flex align-items-center'>
                            <h6 className='mb-0 me-2'>Published Date: </h6>
                            <span>{published_date}</span>
                        </div>

                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-2' />
                            <span>{rating?.number}</span>
                        </div>
                    </div>
                    <Card.Text className='mt-3'>
                        {details}
                    </Card.Text>

                    <Link to={`/category/${category_id}`}>
                        <Button variant="dark">All News in this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsDetails;