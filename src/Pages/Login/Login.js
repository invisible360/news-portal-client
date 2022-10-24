import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Login = () => {

    const { signInuUsingEmailAndPassword, setLoading } = useContext(AuthContext);
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

                //tricky part
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Login Successful');
                }
                else {
                    toast.error('Your Email is not Verified, Please Verify your email before Login')
                }

                setErrorMsg('');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setErrorMsg(error.message);
            })
            //tricky
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
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
        </div>
    );
};

export default Login;