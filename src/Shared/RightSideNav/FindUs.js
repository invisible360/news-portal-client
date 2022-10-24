import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { RiGitRepositoryPrivateFill, RiTerminalWindowFill } from 'react-icons/ri';



function FindUs() {
    return (
        <div className='my-4'>
            <h6>Find Us On</h6>
            <ListGroup>
                <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp /> WhatsApp</ListGroup.Item>
                <ListGroup.Item><FaDiscord /> Discord</ListGroup.Item>
                <ListGroup.Item><RiGitRepositoryPrivateFill /> Privacy Policy</ListGroup.Item>
                <ListGroup.Item><RiTerminalWindowFill /> Terms & Condition</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default FindUs;