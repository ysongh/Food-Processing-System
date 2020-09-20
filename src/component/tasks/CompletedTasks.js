import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';

const useStyles = makeStyles({
    list: {
        backgroundColor: '#F8F4F4'
    }
});

const CompletedTasks = () => {
    const { user } = useContext(GlobalContext);
    const classes = useStyles();

    return(
        <>
            <h1>Completed Tasks</h1>
            <List>
                { user.tasks && user.tasks.filter(task => task.status === 'Completed' ).map((task, index) => {
                    return(
                        <ListItem className={index % 2 === 0 && classes.list} key={task._id} component={Link} to={`/task/task/${task.taskId}`} button>
                            <ListItemText
                                primary={task.createdAt}
                                secondary={task.title || "Task"}
                            />
                        </ListItem>
                    )
                })}
            </List>
            
        </>
    )
}

export default CompletedTasks;