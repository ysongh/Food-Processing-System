import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidV4 } from 'uuid';

const CreateQR = () => {
    const [qrValue, setQRValue] = useState(0);
    const [qrCodes, setQRCodes] = useState([]);

    const createQRCodes = () => {
        let temp = [];

        for(let i = 0; i < qrValue; i++){
            temp.push(uuidV4());
        }
        
        setQRCodes(temp);
    }

    return(
        <>
            <h1>Create QR Code</h1>
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
                    </div>
                )
            }) }
        </>
    )
}

export default CreateQR;