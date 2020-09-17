import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        backgroundColor: '#F8F4F4'
    }
});

const Tasks = () => {
    const classes = useStyles();

    return(
        <>
            <h1>Tasks</h1>
            <List>
                <ListItem className={classes.list} button>
                    <ListItemText
                        primary="09/14/2020"
                        secondary="Repackage eggs in New York area"
                    />
                </ListItem>
                <ListItem className={classes.list} button>
                    <ListItemText
                        primary="09/14/2020"
                        secondary="Repackage eggs in New York area"
                    />
                </ListItem>
                <ListItem className={classes.list} button>
                    <ListItemText
                        primary="09/14/2020"
                        secondary="Repackage eggs in New York area"
                    />
                </ListItem>
            </List>
            
        </>
    )
}

export default Tasks;