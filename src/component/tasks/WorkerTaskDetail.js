import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';
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
    },
    sendBtn: {
        display: 'block',
        width: '14rem',
        margin: 'auto',
        marginTop: '2rem',
        fontSize: '2rem',
        textAlign: 'center',
        fontSize: '2rem'
    }
});

const WorkerTaskDetail = () => {
    const { user_gln, user_gtin } = useContext(GlobalContext);
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

            { user_gln && (
                <>
                    <Typography className={classes.title} variant="body1" color="primary">
                        GLN: 
                    </Typography>
                    <Typography variant="body1">
                        { user_gln }
                    </Typography>
                </>
            )}

            { user_gtin && (
                <>
                    <Typography variant="body1" color="primary">
                        GTIN: 
                    </Typography>
                    <Typography variant="body1">
                        { user_gtin }
                    </Typography>
                </>
            )}

            <Typography className={classes.p} variant="body1" align="center">
                Please scan GTIN or GLN
            </Typography>
            <Button className={classes.btn} component={Link} to={`/task/scantask/${taskid}`} variant="contained" color="primary">
                Scan
            </Button>
            { user_gln && (
                <Button className={classes.sendBtn} component={Link} to={`/task/main`} variant="contained">
                    Submit
                </Button>
            )}
            
        </>
    )
}

export default WorkerTaskDetail;