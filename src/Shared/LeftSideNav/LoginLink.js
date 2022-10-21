import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { BsGoogle, BsGithub } from 'react-icons/bs';

function LoginLink() {
  return (
    <ButtonGroup vertical>
      <Button className='mb-2 fw-bold px-5' variant='outline-primary'> <BsGoogle></BsGoogle> Login via Google</Button>
      <Button className='fw-bold px-5' variant='outline-dark'><BsGithub></BsGithub> Login via Github</Button>
    </ButtonGroup>
  );
}

export default LoginLink;