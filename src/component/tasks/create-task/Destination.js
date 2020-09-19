import React from 'react';

import TextInputField from '../../common/TextInputField';

const Destination = ({ destination, setDestination }) => {
    return(
        <>
            <h1>Enter the Destination</h1>
            <TextInputField
                label="Destination"
                name="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
        </>
    )
}

export default Destination;