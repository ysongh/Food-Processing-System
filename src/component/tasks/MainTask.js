import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles({
    container: {
        marginTop: '4rem'
    },
    btn: {
        display: 'block',
        width: '15rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        margin: '1rem auto',
        fontSize: '2rem',
        textAlign: 'center'
    }
});

const MainTask = () => {
    const { user } = useContext(GlobalContext);
    const classes = useStyles();

    return(
        <div className={classes.container}>
            { user.type === 'Owner' ? (<Button className={classes.btn} component={Link} to="/task/add" variant="contained">
                Create Task
                </Button>) : (
                <Button className={classes.btn} component={Link} to="/task/newtask" variant="contained">
                    New Task
                </Button>
            ) }
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