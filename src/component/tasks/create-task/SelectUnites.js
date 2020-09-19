import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import TextInputField from '../../common/TextInputField';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    }
});

const SelectUnites = ({ gln, gtin, unit, setUnit, location }) => {
    const classes = useStyles();

    return(
        <>
            <h1>Select Unites</h1>
            
            <Typography variant="h6">
                From:
            </Typography>
            <Typography variant="body1">
                (GLN: { gln })
            </Typography>
            <Typography className={classes.p} variant="body1">
                { location }
            </Typography>

            <Typography variant="body1">
                How many unites of items (GTIN: { gtin }) do you want to repackage?
            </Typography>
            <TextInputField
                name="title"
                type="number"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            />
             <Typography variant="body2">
                1-100
            </Typography>
        </>
    )
}

export default SelectUnites;