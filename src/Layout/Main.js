import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/*  Initial Outlet  */}
            <Container>
                <Row>
                    {/* Space for left navbar */}
                    <Col lg='2'>
                        <h2>Left navbar</h2>
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
                        <h2>Right navbar</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;