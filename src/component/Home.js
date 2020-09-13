import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Food Processing System</h1>
            <Link to="/qrreader">
                Scan QR Code
            </Link>
        </>
    )
}

export default Home;