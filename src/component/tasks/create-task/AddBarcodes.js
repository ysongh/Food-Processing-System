import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';

import TextInputField from '../../common/TextInputField';

const AddBarcodes = ({ gln, setGLN, setActiveStep }) => {
    return(
        <>
            <h1>Add GLN and GTIN</h1>
            <Box display="flex">
                <TextInputField
                    label="Please Input GLN"
                    name="gln"
                    type="text"
                    value={gln}
                    onChange={(e) => setGLN(e.target.value)}
                />
                <IconButton onClick={() => setActiveStep(10)} color="primary">
                    <CropFreeIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default AddBarcodes;