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
                    <Typography variant="caption">
                        { user_gln }
                    </Typography>
                </>
            )}

            { user_gtin && (
                <>
                    <Typography variant="body1" color="primary">
                        GTIN: 
                    </Typography>
                    <Typography variant="caption">
                        { user_gtin }
                    </Typography>
                </>
            )}

            <Typography className={classes.p} variant="body1" align="center">
                Please scan GTIN or GLN
            </Typography>
            <Button className={classes.btn} component={Link} to="/qrreader" variant="contained" color="primary">
                Scan
            </Button>
        </>
    )
}

export default WorkerTaskDetail;