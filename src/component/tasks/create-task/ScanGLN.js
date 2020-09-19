import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import axios from '../../../axios';
 
class ScanGLN extends Component {
    handleScan = async (value) => {
        try{
            if (value) {
                this.props.setGLN(value);
                const { data } = await axios.get('/gln/code/' + value);

                this.props.setLocation(data.data.address);
                this.props.setActiveStep(1);
            }
        } catch(err){
            console.error(err);
        }
    }

    handleError = err => {
        console.error(err);
    }

    render() {
        return (
            <>
                <h1>Scan GLN</h1>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan} />
            </>
        )
    }
}

export default ScanGLN;