import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    }
});

const Review = ({ title, description, unit, location,destination, gtin, gln, startDate, workerIds }) => {
    const classes = useStyles();

    return(
        <>
            <h1>Reviews</h1>
            
            <Typography variant="h6">
                Title of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { title }
            </Typography>

            <Typography variant="h6">
                Description of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { description }
            </Typography>

            <Typography variant="h6">
                Detail of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { unit } units of item package (GTIN: { gtin }) from { location } (GLN: {gln})
            </Typography>

            <Typography variant="h6">
                Destination:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { destination }
            </Typography>

            <Typography variant="h6">
                Start Date:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { startDate }
            </Typography>

            <Typography variant="h6">
                Workers:
            </Typography>
            {workerIds.map(worker => {
                return(
                    <Typography key={worker.id} className={classes.p} variant="body1">
                        { `${worker.amount} Units signs to ${worker.name}`}
                    </Typography>
                )
            })}
        </>
    )
}

export default Review;