import React from 'react';

// importing from react-boostrap
import Carousel from 'react-bootstrap/Carousel';

// importing images
import sponsor_1 from '../../../assets/Brands/sponsor_1.jpeg';
import sponsor_2 from '../../../assets/Brands/sponsor_2.jpeg';
import sponsor_3 from '../../../assets/Brands/sponsor_3.jpeg';

const BrandAds = () => {
    return (
        <div>
            {/* carousel to display brand ads */}
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sponsor_1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sponsor_2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sponsor_3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default BrandAds;