import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MoreIcon from '@material-ui/icons/More';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    height: '10vh',
    backgroundColor: '#F8F4F4'
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/qrreader" label="Scan" icon={<PhoneIphoneIcon />} />
      <BottomNavigationAction component={Link} to="/task/main" label="Tasks" icon={<FormatListBulletedIcon />} />
      <BottomNavigationAction label="More" icon={<MoreIcon />} />
      <BottomNavigationAction label="Me" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
