import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const CreateQR = () => {
    const [qrValue, setQRValue] = useState(3);
    const [qrCodes, setQRCodes] = useState([]);

    const createQRCodes = () => {
        let temp = [];

        for(let i = 0; i < qrValue; i++){
            temp.push(Math.floor(1000000000 + Math.random() * 9000000000));
        }
        
        setQRCodes(temp);
    }

    return(
        <>
            <h1>Create QR Code for GTIN</h1>
            <input
                name="qrValue"
                type="number"
                placeholder="Number of QR Codes"
                value={qrValue}
                onChange={(e) => setQRValue(e.target.value)} />
            <button onClick={() => createQRCodes()}>Create</button>
            <br />
            <br />
            { qrCodes.map((qr, index)  => {
                return (
                    <div className="qr-code" key={index}>
                        <QRCode value={qr} />
                        <p>{qr}</p>
                    </div>
                )
            }) }
        </>
    )
}

export default CreateQR;