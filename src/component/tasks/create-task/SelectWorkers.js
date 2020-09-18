import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: '#F8F4F4'
    },
}));

const SelectWorkers = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

  return (
      <>
        <h1>Select the available workers</h1>
        <List className={classes.root}>
            <ListItem role={undefined} dense button onClick={handleToggle(0)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(0) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary="Bob" />
            </ListItem>
            <ListItem role={undefined} dense button onClick={handleToggle(1)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(1) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary="Jill" />
            </ListItem>
            <ListItem role={undefined} dense button onClick={handleToggle(2)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(2) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary="John" />
            </ListItem>
        </List>
    </>
  );
}

export default SelectWorkers;