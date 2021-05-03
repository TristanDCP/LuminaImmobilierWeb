import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
    Container,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    info: {
        fontSize: '10px',
        width: '100%',
        justifyContent: 'center',
    }
}));

async function loginUser(credentials) {
    return axios.post('http://www.share-your-universe.com/public/api/v1/login', credentials)
        .then(data => data)
        .catch(err => console.log(err))
}

export default function LogIn({ setToken }) {

    const classes = useStyles();
    const history = useHistory();

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            userEmail,
            userPassword
        });
        setToken(token.data);
    }

    const goToSignup = () => {
        history.push('/signup');
    }

    const goToHome = () => {
        history.push('/');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Se Connecter
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Adresse e-mail"
                                autoComplete="email"
                                onChange={e => setUserEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setUserPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Se Souvenir de moi"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Se Connecter
                    </Button>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Button onClick={() => goToHome()} className={classes.info} variant="body2">
                                Revenir à l'accueil
                                </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button onClick={() => goToSignup()} className={classes.info} variant="body2">
                                Pas encore de compte ? S'inscrire
                                </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
}