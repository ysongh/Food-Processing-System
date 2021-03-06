import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        marginTop: '7rem'
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

const More = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <Button className={classes.btn} component={Link} to="/glns" variant="contained">
                    Find GLN
                </Button>
                <br />
                <Button className={classes.btn} component={Link} to="/createqr" variant="contained">
                    Create GTIN
                </Button>
            </div>
        </>
    )
}

export default More;