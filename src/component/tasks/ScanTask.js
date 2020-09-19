import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import axios from '../../axios';

const useStyles = makeStyles({
    title: {
        marginTop: '2rem'
    },
    p: {
        marginTop: '5rem'
    },
    btn: {
        display: 'block',
        width: '14rem',
        margin: 'auto',
        fontSize: '2rem',
        textAlign: 'center',
        fontSize: '3rem'
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
            <Typography className={classes.title} variant="h5">
                Task: { data.title }
            </Typography>

            <Typography variant="h5">
                Date: { data.startDate }
            </Typography>

            <Typography className={classes.p} variant="body1" align="center">
                Please scan GTIN or GLN
            </Typography>
            <Button className={classes.btn} component={Link} to="/qrreader" variant="contained" color="primary">
                Scan
            </Button>
        </>
    )
}

export default Task;