import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

 
class ScanGTIN extends Component {
    handleScan = (value) => {
        if (value) {
            this.props.setGTIN(value);

            this.props.setActiveStep(1);
        }
    }

    handleError = err => {
        console.error(err);
    }

    render() {
        return (
            <>
                <h1>Scan GTIN</h1>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan} />
            </>
        )
    }
}

export default ScanGTIN;