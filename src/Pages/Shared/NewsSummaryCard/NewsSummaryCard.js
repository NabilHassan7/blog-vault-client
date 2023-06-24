import React from 'react';
import { Link } from 'react-router-dom';

// importing from react-bootstrap 
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

//importing from react icons
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


const NewsSummaryCard = ({news}) => {
    // destructuring received data
    const {_id, title, author, details, image_url, total_view} = news;
    return (
        <div>
            {news.title};
            <Card className="mb-5">
                {/* author info */}
                <Card.Header className=' d-flex justify-content-between align-items-center'>
                    <div className=' d-flex'>
                        <Image
                            className=' me-2'
                            fluid
                            roundedCircle
                            src={author.img}
                            style={{height: '60px'}}
                        ></Image>
                        <div>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant='top' src={image_url}/>
                        <Card.Text>
                            {/* conditional to check if the news detail is too long or not */}
                            {
                                details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;