import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            {/*  Initial Outlet  */}

            {/* Space for header component */}
            <Header></Header>

            {/* Main container Outlet */}
            <Container>
                <Row>
                    {/* Space for left navbar */}
                    {/* hidden on smaller screens */}
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    {/* Space for outlet - Outlet will change along with the content */}
                    <Col lg='7'>
                        {/* Outlet window */}
                        <Outlet>
                            <h2>This is the outlet window</h2>
                        </Outlet>
                    </Col>

                    {/* Space for right sidenav */}
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

            {/* Space for footer component */}
            <Footer></Footer>
        </div>
    );
};

export default Main;