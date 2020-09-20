import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const { user, loginUser, user_gln, user_gtin } = useContext(GlobalContext);
    const history = useHistory();
    const classes = useStyles();
    const { taskid } = useParams();

    const [taskData, setTaskData] = useState({});
    const [go] = useState(true);

    useEffect(() => {
        async function getTaskbyId() {
            try{
                const { data } = await axios.get('/task/task/' + taskid);

                console.log(data)
                setTaskData(data.data);
            } catch(err){
                console.error(err);
            }
        }
        
        getTaskbyId();
    }, [go, taskid]);

    const onSubmit = async () => {
        try{
            const { data } = await axios.put(`/user/completed/${user._id}/${taskid}`);
            await axios.put(`/user/completed/${taskData.ownerId}/${taskid}`);

            
            loginUser(data.data);
            history.push('/task/main');
        } catch(err){
            console.error(err);
        }
    }

    return(
        <>  
            <Typography className={classes.title} variant="h5">
                Task: { taskData.title }
            </Typography>

            <Typography variant="h5">
                Date: { taskData.startDate }
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
                <Button className={classes.sendBtn} onClick={() => onSubmit()} variant="contained">
                    Submit
                </Button>
            )}
            
        </>
    )
}

export default WorkerTaskDetail;