import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    }
});

const SelectUnites = ({ gln, gtin, destination }) => {
    const classes = useStyles();

    return(
        <>
            <h1>Select Unites</h1>
            
            <Typography variant="h6">
                Destination:
            </Typography>
            <Typography variant="body1">
                (GLN: { gln })
            </Typography>
            <Typography className={classes.p} variant="body1">
                { destination }
            </Typography>

            <Typography variant="body1">
                How many unites of items (GTIN: { gtin }) do you want to repackage?
            </Typography>
        </>
    )
}

export default SelectUnites;