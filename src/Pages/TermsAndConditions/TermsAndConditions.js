import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>
            <p>GO Back to <Link to='/register'>Registration Page</Link></p>

        </div>
    );
};

export default TermsAndConditions;