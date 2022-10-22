import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Terms and Conditions</h3>
            <Button variant="outline-secondary"><Link to='/register'>Back to Register</Link></Button>
        </div>
    );
};

export default TermsAndConditions;