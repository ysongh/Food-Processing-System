import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    area: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    p: {
        marginBottom: '1rem'
    }
});

const AssignUnits = ({ workerIds }) => {
    const classes = useStyles();

    return(
        <>
            <h1>Assign Units to Workers</h1>
            
            {workerIds.map(worker => {
                return(
                    <Box className={classes.area}>
                        <Typography key={worker.id} className={classes.p} variant="h6">
                            { worker.name }
                        </Typography>
                        <TextField value={worker.amount} variant="outlined"/>
                    </Box>
                    
                )
            })}
        </>
    )
}

export default AssignUnits;