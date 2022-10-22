import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero sed repellendus nobis id consectetur ducimus, eligendi cumque ab doloribus eos at maxime vel. Eius illum voluptas ab maxime temporibus reprehenderit doloremque officia fugit velit animi consequuntur illo doloribus suscipit incidunt, repellendus tenetur perferendis aperiam omnis dolorem expedita. Magni, minus?</p>
            <Button variant="outline-secondary"><Link to='/register'>Back to Register</Link></Button>
        </div>
    );
};

export default TermsAndConditions;