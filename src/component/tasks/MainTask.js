import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        marginTop: '5rem'
    },
    btn: {
        display: 'block',
        width: '14rem',
        margin: '2rem auto',
        fontSize: '2rem',
        textAlign: 'center'
    }
});

const MainTask = () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Button className={classes.btn} component={Link} to="/task/add" variant="contained">
                New Task
            </Button>
            <br />
            <Button className={classes.btn} component={Link} to="/task/tasks/false" variant="contained">
                Ongoing Task
            </Button>
            <br />
            <Button className={classes.btn} component={Link} to="/task/tasks/true" variant="contained">
                Completed Task
            </Button>
        </div>
    )
}

export default MainTask;