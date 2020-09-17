import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import axios from '../../axios';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    }
});

const Task = () => {
    const classes = useStyles();
    const { taskid } = useParams();

    const [data, setData] = useState({});
    const [go] = useState(true);

    useEffect(() => {
        async function getTaskbyId() {
            try{
                const { data } = await axios.get('/task/task/' + taskid);

                console.log(data)
                setData(data.data);
            } catch(err){
                console.error(err);
            }
        }
        
        getTaskbyId();
    }, [go, taskid]);

    return(
        <>
            <h1>{ !data.isCompleted ? 'Ongoing ' : 'Completed ' }Tasks</h1>
            
            <Typography variant="h6">
                Title of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.title }
            </Typography>

            <Typography variant="h6">
                Description of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.description }
            </Typography>

            <Typography variant="h6">
                Detail of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.detail }
            </Typography>

            <Typography variant="h6">
                Destination:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.destination }
            </Typography>

            <Typography variant="h6">
                Start Date:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.startDate }
            </Typography>
        </>
    )
}

export default Task;