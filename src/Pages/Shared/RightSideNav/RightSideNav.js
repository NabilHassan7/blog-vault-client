import React from 'react';
// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RightSideNav = () => {
    return (
        <ButtonGroup vertical>
            <Button variant="outline-primary">Login with Google</Button>
            <Button variant="outline-dark">Login with Github</Button>
            <Button variant="outline-secondary">Login with facebook</Button>
            <Button variant="outline-success">Login with twiiter</Button>     
        </ButtonGroup>
    );
};

export default RightSideNav;