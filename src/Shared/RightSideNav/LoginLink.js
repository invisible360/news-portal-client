import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { BsGoogle, BsGithub } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

function LoginLink() {
  const { user, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const googleAuthProvider = new GoogleAuthProvider();

  const loginViaGoogle = () => {
    googleSignIn(googleAuthProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error))
  }


  return (
    <ButtonGroup vertical>
      {
        user && user.uid ?
          <>
            <Button disabled className='mb-2 fw-bold px-5' variant='outline-primary'><BsGoogle></BsGoogle> Login via Google</Button>
            <Button disabled className='fw-bold px-5' variant='outline-dark'><BsGithub></BsGithub> Login via Github</Button>

          </>
          :
          <>
            <Button onClick={loginViaGoogle} className='mb-2 fw-bold px-5' variant='outline-primary'> <BsGoogle></BsGoogle> Login via Google</Button>
            <Button className='fw-bold px-5' variant='outline-dark'><BsGithub></BsGithub> Login via Github</Button>
          </>
      }

    </ButtonGroup>
  );
}

export default LoginLink;