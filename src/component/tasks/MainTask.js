import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Badge, Button } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles({
    container: {
        marginTop: '4rem'
    },
    btn: {
        display: 'block',
        margin: 'auto',
        width: '17rem',
        padding: '2rem 1rem',
        fontSize: '2rem',
        textAlign: 'center'
    },
    mb: {
        marginBottom: '2rem'
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
                    <Box className={classes.mb} display="flex" justifyContent="center">
                        <Badge badgeContent={1} color="secondary">
                            <Button className={classes.btn} component={Link} to="/task/newtask" variant="contained">
                                New Task
                            </Button>
                        </Badge>
                    </Box>
                
            ) }

            <Box className={classes.mb} display="flex" justifyContent="center">
                <Badge badgeContent={1} color="secondary">
                    <Button className={classes.btn} component={Link} to="/task/tasks/false" variant="contained">
                        Ongoing Task
                    </Button>
                </Badge>
            </Box>
            
            <Box display="flex" justifyContent="center">
                <Badge badgeContent={1} color="secondary">
                    <Button className={classes.btn} component={Link} to="/task/tasks/true" variant="contained">
                        Completed Task
                    </Button>
                </Badge>
            </Box>
            
        </div>
    )
}

export default MainTask;