import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

function Header() {
  const { user, logOut } = useContext(AuthContext);//checking

  const logOutFromGoogle = () => {
    logOut()
      .then(() => { })
      .then(error => console.error(error))
  }


  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link className='text-decoration-none text-black ' to='/'>News Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <div>
              {
                user && user?.uid ?
                  
                    <div className='d-flex align-items-center'>
                      <Link className='text-decoration-none text-primary fs-4 fw-bold' to='/profile'>{user?.displayName}</Link>
                      <Button className='mx-3' onClick={logOutFromGoogle} variant="outline-info">
                        <Link className='text-decoration-none text-black' to='/'>Sign Out</Link></Button>
                    </div>
                  
                  :
                  <>
                    <Link to='/login'><Button variant='outline-danger'>Login</Button></Link>
                    <Link className='mx-3' to='/register'><Button variant='outline-success'>Register</Button></Link>
                  </>
              }

            </div>
            <Link className='text-decoration-none text-black' to="/profile">
              {
                user && user?.uid ?
                  <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image>
                  :
                  <FaUser />
              }
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;