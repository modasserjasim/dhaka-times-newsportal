import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaShareAlt, FaRegBookmark, FaStar, FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { author, image_url, title, total_view, details, rating } = news;

    return (
        <div className='bg-white shadow rounded mb-4'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={author?.img} alt="Author img" className='author' />
                        <div>
                            <h5 className='font-bold m-0'>{author?.name}</h5>
                            <p className='m-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <Link><FaRegBookmark /></Link>
                        <Link><FaShareAlt /></Link>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Img src={image_url} alt="News image" />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <h6><FaStar /> {rating?.number}</h6>
                    <h6><FaRegEye /> {total_view}</h6>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;