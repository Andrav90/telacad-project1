import React from 'react';
import error from '../../assets/404.png';

function Page404() {
    return(
        <div style={{ height: '100vh', width: '50%', marginLeft: '30%', marginRight: '25%', paddingTop: '15%'}}>
            <h1>The requested page doesn't exist</h1>
            <img src={error} alt="404" style={{marginLeft: '25%'}}></img>
        </div>
    );
};

export default Page404;