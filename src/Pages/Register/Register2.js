import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Register = () => {

    const { user, createUser, updateUserNamePhoto } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;

        const fName = form.firstName.value;
        const lName = form.lastName.value;
        const displayName = `${fName} ${lName}`;

        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            alert('Password not match!');
        }

        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    alert('User Succesfully Created!');
                    updateInfo(
                        {
                            displayName: displayName,
                            photoURL: photoUrl
                        }
                    );
                    navigate(0);
                    // navigate('/');
                    setErrorMsg('');

                })
                .catch(err => {
                    console.error(err);
                    setErrorMsg(err.message)
                })
        }
    }

    const updateInfo = userInfo => {
        updateUserNamePhoto(userInfo)
            .then(() => { })
            .catch((err) => console.error(err))
    }

    const handleTerms = event => {
        const checked = event.target.checked;
        setAccepted(checked);
    }

    return (
        <div>
            {
                user && user?.uid ?
                    <>
                        <h1 className='text-center'>Registration Compelete</h1>
                        <p>Go to <Link to='/'>Home Page</Link></p>

                    </>
                    :
                    <>
                        <h1 className='text-center'>Registration</h1>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name='firstName' type="text" placeholder="Enter first name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name='lastName' type="text" placeholder="Enter last name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control name='photoUrl' type="text" placeholder="Enter Photo URL" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check onClick={handleTerms} type="checkbox"

                                    label={<>Accept <Link to='/terms'>Terms and Condition.</Link></>} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Text className='text-danger'>{errorMsg}</Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!accepted}>
                                Register
                            </Button>
                        </Form>
                    </>
            }
        </div>
    );
};

export default Register;