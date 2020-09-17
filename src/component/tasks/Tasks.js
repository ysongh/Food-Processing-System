import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import axios from '../../axios';

const useStyles = makeStyles({
    list: {
        backgroundColor: '#F8F4F4'
    }
});

const Tasks = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [go] = useState(true);

    useEffect(() => {
        async function getTasks() {
            try{
                const { data } = await axios.get('/task/tasks');
    
                setData(data.data);
            } catch(err){
                console.error(err);
            }
        }
        
        getTasks();
    }, [go]);

    return(
        <>
            <h1>Tasks</h1>
            <List>
                { data.map((task, index) => {
                    return(
                        <ListItem className={index % 2 === 0 && classes.list} key={task._id} button>
                            <ListItemText
                                primary={task.createdAt}
                                secondary={task.title}
                            />
                        </ListItem>
                    )
                })}
            </List>
            
        </>
    )
}

export default Tasks;