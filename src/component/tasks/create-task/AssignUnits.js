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

const AssignUnits = ({ workerIds, setWorkerIds }) => {
    const classes = useStyles();

    const updateUnits = (value, index) => {
        let temp = [...workerIds];
        temp[index].amount = value;

        setWorkerIds(temp);
    }

    return(
        <>
            <h1>Assign Units to Workers</h1>
            
            {workerIds.map((worker, index) => {
                return(
                    <Box className={classes.area}>
                        <Typography key={worker.id} className={classes.p} variant="h6">
                            { worker.name }
                        </Typography>
                        <TextField
                            type="number"
                            value={worker.amount}
                            variant="outlined"
                            onChange={(e) => updateUnits(e.target.value, index)}/>
                    </Box>
                    
                )
            })}
        </>
    )
}

export default AssignUnits;