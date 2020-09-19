import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Button} from '@material-ui/core';

import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles({
    container: {
        display: 'block',
        textAlign: 'center'
    },
    userImage: {
        width: '10rem',
        height: '10rem',
        margin: 'auto',
        marginTop: '6rem',
        marginBottom: '1rem',
        fontSize: '5rem'
    },
    btn: {
        display: 'block',
        width: '12rem',
        margin: '2rem auto',
        fontSize: '1.6rem',
        textAlign: 'center'
    }
});

const Profile = () => {
    const { user } = useContext(GlobalContext);
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <Avatar className={classes.userImage}>{ user.name && user.name[0] }</Avatar>
                <Typography variant="h5" paragraph>
                    { user.name}
                </Typography>
                <Typography variant="h6">
                    { user.type}
                </Typography>
                <Button className={classes.btn} color="secondary" component={Link} to="/qrreader" variant="contained">
                    Logout
                </Button>
            </div>
        </>
    )
}

export default Profile;