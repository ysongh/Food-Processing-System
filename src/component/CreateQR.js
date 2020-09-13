import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const CreateQR = () => {
    const [qrValue, setQRValue] = useState('');

    return(
        <>
            <h1>Create QR Code</h1>
            <input
                name="qrValue"
                placeholder="code"
                value={qrValue}
                onChange={(e) => setQRValue(e.target.value)} />
            <br />
            <br />
            <QRCode value={qrValue} />
        </>
    )
}

export default CreateQR;