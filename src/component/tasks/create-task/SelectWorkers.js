import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: '#F8F4F4'
    },
}));

const SelectWorkers = ({ workerList, workerIds, setWorkerIds }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        const workers = [...workerIds];

        if (currentIndex === -1) {
            newChecked.push(value);
            workers.push({
                id: workerList[value]._id,
                name: workerList[value].name,
                amount: 0
            });
        } else {
            newChecked.splice(currentIndex, 1);
            workers.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setWorkerIds(workers);
    };

  return (
      <>
        <h1>Select the available workers</h1>
        <List className={classes.root}>
            { workerList.map((worker, index) => {
                return(
                    <ListItem key={worker._id}role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index) !== -1}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={worker.name} />
                    </ListItem>
                )
            })}
        </List>
    </>
  );
}

export default SelectWorkers;