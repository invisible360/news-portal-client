import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="info" />
            </div>
        </>
    }

    if (user && user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;