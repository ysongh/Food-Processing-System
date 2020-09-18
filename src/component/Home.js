import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        marginTop: '10rem'
    },
    btn: {
        display: 'block',
        width: '14rem',
        padding: '2rem',
        margin: '2rem auto',
        fontSize: '2rem',
        textAlign: 'center'
    }
});

const Home = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <Button className={classes.btn} component={Link} to="/task/main" variant="contained">
                    Task
                </Button>
                <br />
                <Button className={classes.btn} component={Link} to="/qrreader" variant="contained">
                    Scan
                </Button>
            </div>
        </>
    )
}

export default Home;