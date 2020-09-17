import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    }
});

const Review = ({ title, description, detail, destination, startDate }) => {
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
                { detail }
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
        </>
    )
}

export default Review;