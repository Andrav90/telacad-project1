import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div style={{ paddingTop: '20px', paddingBottom: '30px' }}>
            <hr />
            <Link to='/about' style={{color: 'black'}}>About us</Link>
        </div>
    );
};

export default Footer;