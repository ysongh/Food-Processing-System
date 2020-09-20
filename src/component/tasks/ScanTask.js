import React, { useContext } from 'react';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import QrReader from 'react-qr-reader';

import { GlobalContext } from '../../context/GlobalState';
 
const ScanTask = () => {
    const { user_gln, addGLN, addGTIN } = useContext(GlobalContext);
    const history = useHistory();
    const { taskid } = useParams();

    const handleScan = data => {
        setTimeout(
            function() {
                if(!user_gln){
                    addGLN('43242092010029');
                }
                else{
                    addGTIN('312312u3222332');
                }
                history.push(`/task/workertask/${taskid}`)
            }.bind(this),
            1000
        )
    }

    const handleError = err => {
        console.error(err);
    }

    return (
        <>
            <h1>Scan Code</h1>

            <QrReader
                delay={300}
                onError={() => handleError()}
                onScan={() => handleScan()} />
        </>
    )
}

export default ScanTask;