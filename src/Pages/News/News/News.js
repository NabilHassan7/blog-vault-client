import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

// importing from react-bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    // storing received data
    const news = useLoaderData();
    //destructuring data
    const {title, details, image_url, category_id} = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className=' fw-bolder'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Go to this category</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;