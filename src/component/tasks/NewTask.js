import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';
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
    const { user, loginUser } = useContext(GlobalContext);
    const history = useHistory();
    const classes = useStyles();

    const onSubmit = async () => {
        try{
            const { data } = await axios.put('/user/newtask/' + user._id);
            
            loginUser(data.data);
            history.push('/task/main');
        } catch(err){
            console.error(err);
        }
    } 

    return(
        <>
            <h1>New Tasks</h1>
            
            <Typography variant="h6">
                Title of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { user.tasks && user.tasks[0].title }
            </Typography>

            <Typography variant="h6">
                Description of this Task:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { user.tasks && user.tasks[0].description }
            </Typography>

            <Typography variant="h6">
                Destination:
            </Typography>
            <Typography className={classes.p} variant="body1">
                { user.tasks && user.tasks[0].destination }
            </Typography>

            <div>
              <Button className={classes.btn} component={Link} to="/task/main" variant="contained" color="secondary">
                Reject
              </Button>
              <Button className={classes.btn} variant="contained" color="primary" onClick={() => onSubmit()}>
                Accept
              </Button>
            </div>
        </>
    )
}

export default NewTask;