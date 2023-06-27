import React, { useContext } from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

// importing from react icons
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BrandAds from '../BrandAds/BrandAds';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const RightSideNav = () => {

    // start of GOOGLE AUTHENTICATION
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    // END OF GOOGLE AUTHENTICATION

    return (
        <div>
            {/* login variants */}
            <ButtonGroup vertical>
                <Button className=' mb-2' variant="outline-primary"><FaEnvelope /><Link className=' text-decoration-none ms-1' to="./Login">Login with Email</Link></Button>
                <Button onClick={handleGoogleSignIn} className=' mb-2' variant="outline-primary"><FaGoogle /><span className=' ms-1'>Login with Google</span></Button>
                {/* <Button className=' mb-2' variant="outline-dark"><FaGithub />Login with Github</Button>
                <Button className=' mb-2' variant="outline-primary"><FaFacebookF />Login with facebook</Button>
                <Button className=' mb-2' variant="outline-primary"><FaTwitter />Login with twitter</Button>      */}
            </ButtonGroup>
            
            {/* social media links */}
            <div className='mt-4'>
                <h5>Find us on: </h5>
                <ListGroup>
                    <ListGroup.Item className=' mb-2'><FaFacebookF /> <Link to='https://www.facebook.com/' target='_blank' className=' text-decoration-none text-black'>Facebook</Link></ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaTwitter /> <Link to='https://twitter.com/?lang=en' target='_blank' className=' text-decoration-none text-black'>Twitter</Link></ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaGithub /> <Link to='https://github.com/' target='_blank' className=' text-decoration-none text-black'>Github</Link></ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaYoutube /> <Link to='https://www.youtube.com/' target='_blank' className=' text-decoration-none text-black'>YouTube</Link></ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaWhatsapp /> <Link to='https://www.whatsapp.com/' target='_blank' className=' text-decoration-none text-black'>Whatsapp</Link></ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaLinkedin /> <Link to='https://www.linkedin.com/' target='_blank' className=' text-decoration-none text-black'>LinkedIn</Link></ListGroup.Item>
                </ListGroup>
            </div>

            {/* advertisement space */}
            <div className='mt-4'>
                <h5>Our sponsors: </h5>
                <BrandAds></BrandAds>
            </div>
            
        </div>
    );
};

export default RightSideNav;