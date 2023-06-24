import React, { useContext } from 'react';

// importing from react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

// importing from react icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BrandAds from '../BrandAds/BrandAds';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

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
                <Button onClick={handleGoogleSignIn} className=' mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>
                <Button className=' mb-2' variant="outline-dark"><FaGithub />Login with Github</Button>
                <Button className=' mb-2' variant="outline-primary"><FaFacebookF />Login with facebook</Button>
                <Button className=' mb-2' variant="outline-primary"><FaTwitter />Login with twiiter</Button>     
            </ButtonGroup>
            
            {/* social media links */}
            <div className='mt-4'>
                <h5>Find us on: </h5>
                <ListGroup>
                    <ListGroup.Item className=' mb-2'><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className=' mb-2'><FaLinkedin /> LinkedIn</ListGroup.Item>
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