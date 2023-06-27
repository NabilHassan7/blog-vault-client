import React, { useContext } from 'react';
import './Header.css';

// importing from react-boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import LeftSideNav from '../LeftSideNav/LeftSideNav'; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    // Receiving and destructuring Auth Context
    const { user, logOut } = useContext(AuthContext);

    // function for google logout
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            {/* data-bs-theme controls the theme of the navbar */}
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand><Link to='/' className=' text-decoration-none site-title'>Blog Vault</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            <NavDropdown className=' ms-2' title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/0'>All News</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/1'>Breaking News</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/2'>Regular News</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/3'>International News</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/4'>Sports</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/5'>Entertainment</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/6'>Culture</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className=' text-decoration-none text-white' to='/category/7'>Arts</Link></NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid?
                                    <>
                                        <Button variant="danger" className=' me-3' onClick={handleLogOut}>Log out</Button>
                                        <Button variant='outline-success' style={{background: 'white'}}><span className=' fw-bold' style={{color: 'black'}}>{user?.displayName}</span></Button>
                                    </>
                                    :
                                    <>
                                        <Button variant='outline-light' className=' me-2'><Link to='/login' className=' text-decoration-none text-danger'>Login</Link></Button>
                                        <Button variant='outline-light' className=' me-2'><Link to='/register' className=' text-decoration-none text-danger'>Register</Link></Button>
                                        {/* <Link to='/register' className=' text-decoration-none'>Register</Link> */}
                                    </>
                                }
                            </>
                            <Link to='/profile'>
                                {user?.photoURL ?
                                    <Image
                                        className=' ps-2'
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser className=' text-danger'></FaUser>
                                }
                            </Link>
                        </Nav>
                        {/* displaying the category in menu
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;