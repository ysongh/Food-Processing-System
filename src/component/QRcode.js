import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
 
class QRcode extends Component {
    handleScan = data => {
      if (data) {
          setTimeout(
              function() {
                  this.props.history.push(`/item/${data}`)
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
                <h1>Scan Code</h1>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    className="qr-reader" />
            </>
        )
    }
}

export default QRcode;