import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';
import axios from '../../axios';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    },
    btn: {
        display: 'block',
        margin: 'auto',
        marginTop: '2rem',
        width: '17rem',
        fontSize: '2rem',
        textAlign: 'center'
    },
});

const Task = () => {
    const { user, loginUser } = useContext(GlobalContext);
    const classes = useStyles();
    const { taskid } = useParams();

    const [data, setData] = useState({});
    const [go] = useState(true);

    useEffect(() => {
        async function getTaskbyId() {
            try{
                const { data } = await axios.get('/task/task/' + taskid);

                setData(data.data);
            } catch(err){
                console.error(err);
            }
        }

        async function isCompletedFalse() {
            try{
                const { data } = await axios.put('/user/iscompleted/' + user._id);

                loginUser(data.data);
                console.log(data.data)
            } catch(err){
                console.error(err);
            }
        }
        
        getTaskbyId();
        isCompletedFalse();
    }, [go, taskid, user, loginUser]);

    return(
        <>
            <h1>Completed Task</h1>
            
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

            <Button className={classes.btn} component={Link} to="/task/main/" variant="contained">
                Close
            </Button>
        </>
    )
}

export default Task;