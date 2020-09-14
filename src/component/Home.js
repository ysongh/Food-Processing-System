import React from 'react';
import { Link } from 'react-router-dom';

import Warehouses from './Warehouses';

const Home = () => {
    return(
        <>
            <h1>Food Processing System</h1>
            <Warehouses />
            <br />
            <Link to="/qrreader">
                Scan QR Code
            </Link>
            <br />
            <Link to="/createqr">
                Create QR Code
            </Link>
        </>
    )
}

export default Home;