import React from 'react';
import errPage from '../assets/images/errorpage.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img style={{height: '100vh', width: '100%'}} src={errPage} alt="" />
        </div>
    );
};

export default ErrorPage;