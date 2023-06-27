import React from 'react';
import { Link } from 'react-router-dom';

// importing from react-bootstrap 
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

//importing from react icons
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const NewsSummaryCard = ({news}) => {
    // destructuring received data
    const {_id, title, author, details, image_url, total_view, rating} = news;
    return (
        <div>
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
                            <p className=' mb-1 fw-bold h5'>{author.name}</p>
                            <p>Published - {author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className=' me-2'></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title className=' mb-2 fw-bolder'>{title}</Card.Title>
                        <Card.Img variant='top' src={image_url}/>
                        <Card.Text className=' mt-2'>
                            {/* conditional to check if the news detail is too long or not */}
                            {
                                details.length > 250 ?
                                <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></>
                                :
                                details
                            }
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className=" d-flex justify-content-between">
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span className=' fw-bold'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className=' me-2'></FaEye>
                        <span className=' fw-bold'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;