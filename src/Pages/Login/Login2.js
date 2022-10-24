import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Login = () => {

    const { user, signInuUsingEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInuUsingEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Login Successful');
                navigate(from, { replace: true });
                setErrorMsg('')
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setErrorMsg(error.message);
            })
    }

    return (
        <div>
            {
                user && user?.uid ?
                    <div><h1 className='text-center'>User Already Logged In</h1></div>
                    :
                    <>
                        <h1 className='text-center'>Login</h1>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Text className='text-danger'>{errorMsg}</Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </>

            }
        </div>
    );
};

export default Login;