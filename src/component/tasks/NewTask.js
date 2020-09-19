import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

import axios from '../../axios';

const useStyles = makeStyles({
    p: {
        marginBottom: '1rem'
    },
    btn: {
        width: '45%',
        marginRight: '1rem',
        marginTop: '1rem',
        marginBottom: '3rem',
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
});

const NewTask = () => {
    const classes = useStyles();

    const [data, setData] = useState({});
    const [go] = useState(true);

    useEffect(() => {
        async function getTaskbyId() {
            try{
                const { data } = await axios.get('/task/task/' + '5f6598cb92cdb7db693c43ea');

                setData(data.data);
            } catch(err){
                console.error(err);
            }
        }
        
        getTaskbyId();
    }, [go]);

    return(
        <>
            <h1>New Tasks</h1>
            
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
                Destination:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { data.destination }
            </Typography>

            <div>
              <Button className={classes.btn} component={Link} to="/task/main" variant="contained" color="secondary">
                Reject
              </Button>
              <Button className={classes.btn} variant="contained" color="primary">
                Accept
              </Button>
            </div>
        </>
    )
}

export default NewTask;