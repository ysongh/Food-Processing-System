import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Badge, Button } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: '10rem'
    },
    btn: {
        display: 'block',
        margin: 'auto',
        width: '14rem',
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
    },
    mb: {
        marginBottom: '2rem'
    }
});

const Home = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <Box className={classes.mb} display="flex" justifyContent="center">
                    <Badge badgeContent={1} color="secondary">
                        <Button className={classes.btn} component={Link} to="/task/main" variant="contained">
                            Task
                        </Button>
                    </Badge>
                </Box>
               
                <br />
                <Button className={classes.btn} component={Link} to="/qrreader" variant="contained">
                    Scan
                </Button>
            </div>
        </>
    )
}

export default Home;