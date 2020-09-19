import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
 
class ScanGLN extends Component {
    handleScan = data => {
      if (data) {
          setTimeout(
              function() {
                  this.props.setGLN(data);
                  this.props.setActiveStep(1);
              }.bind(this),
              1000
          )
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