import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

import axios from '../axios';

const GLNs = () => {
    const [glns, setGLNs] = useState([]);
    const [go] = useState(true);

    useEffect(() => {
        async function getGLNs() {
            try{
                const { data } = await axios.get('/gln/all');

                setGLNs(data.data);
            } catch(err){
                console.error(err);
            }
        }
        
        getGLNs();
    }, [go]);

    return(
        <>
            <h1>GLN List</h1>

            { glns.map(gln  => {
                return (
                    <div className="qr-code" key={gln._id}>
                        <QRCode value={gln.code} />
                        <p>{gln.code}</p>
                    </div>
                )
            }) }
        </>
    )
}

export default GLNs;