import React from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    CssBaseline,
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Link,
} from '@material-ui/core';
import Login from '../../pages/login';
import useToken from '../../../functions/useToken';
import ProfileNavbar from '../../template/profile/profileNavbar';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Lumina
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Profile() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // Connexion
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ProfileNavbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={fixedHeightPaper}>
                                Documents
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}