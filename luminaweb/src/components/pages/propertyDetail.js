import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Grid,
    Container,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Chip,
    CircularProgress,
    Paper,
    makeStyles
} from '@material-ui/core';
import PropertyStatus from '../../functions/propertyStatus';

const useStyles = makeStyles((theme) => ({
    row: {
        border: '1px solid',
        borderRadius: '10px',
        padding: '5px',
        backgroundColor: 'whitesmoke',
        margin: '5px 0px',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textarea: {
        width: '100%',
    },
    chip: {
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        color: 'blue',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    paperContent: {
        marginTop: '5px',
        marginBottom: '5px',
    },
    fixedHeight: {
        height: '100%',
    },
}));

export default function PropertyDetails() {

    const [isLoading, setLoading] = useState(true);
    const [property, setProperty] = useState([]);
    const { id } = useParams();
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    useEffect(() => {
        // axios.get(`http://localhost:8000/api/v1/property/${id}`).then(response => {
        axios.get(`http://www.share-your-universe.com/public/api/v1/property/${id}`).then(response => {
            console.log(response.data);
            setProperty(response.data);
            setLoading(false);
        });
    }, [id]);

    if (isLoading) {
        return <div className="App"><CircularProgress disableShrink /></div>;
    }


    return (
        <div>
            {
                <Container>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <Paper className={fixedHeightPaper}>
                                <p className={classes.title}>Titre du bien</p>
                                <Grid container>
                                    <Grid item md={12} className={classes.paperContent}>
                                        Status du bien : {PropertyStatus(property.property.propertyStatus)}<br />
                                    Vendu par : {property.property.idUser}<br />
                                    Type de bien : { }<br />
                                    Prix du bien : { }
                                    </Grid>
                                    {
                                        property.parameters.map(param =>
                                            <Grid item md={6} sm={12} className={classes.paperContent}>
                                                <Chip label={param.keyParameter + ' : ' + param.valueParameter} variant="outlined" className={classes.chip} />
                                            </Grid>
                                        )
                                    }
                                    <Grid item md={12} className={classes.paperContent}>
                                        <p className={classes.title}>Pièces du bien :</p>
                                        {
                                            property.pieces.map(piece =>
                                                <Chip label={piece.pieceName + ' : ' + piece.pieceSurface} variant="outlined" className={classes.chip} />
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item md={8}>
                            <Paper className={fixedHeightPaper}>
                                <img alt="Maison" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: '100%' }} fluid />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={12}>
                            <Paper className={fixedHeightPaper}>
                                    <p className={classes.title}>Galerie</p>
                                    {
                                        property.pictures.map(picture =>
                                            <li>{picture.pictureURL}</li>
                                        )
                                    }
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={8}>
                            <Paper className={fixedHeightPaper}>
                                <p className={classes.title}>Contactez-nous pour plus de renseignements</p>
                                <form className={classes.form} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="Prénom"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Nom de Famille"
                                                name="lastName"
                                                autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Adresse e-mail"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="phoneNumber"
                                                label="Téléphone"
                                                type="tel"
                                                id="phoneNumber"
                                                autoComplete="current-password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="messageCustomer"
                                                label="Message"
                                                multiline
                                                rows={4}
                                                required
                                                variant="outlined"
                                                className={classes.textarea}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="J'accepte de recevoir des offres par mail."
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="J'accepte que mes données soient transférées aux partenaires du Réseau Lumina."
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
                                        Envoyer le message
                                </Button>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={fixedHeightPaper}>
                                <p className={classes.title}>Votre Contact</p>
                                <img alt="Maison" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: '100%' }} fluid /><br />
                            Nom de l'agent :<br />
                            Coordonnées de l'agent / l'agence :<br />
                            Téléphone de l'agent / l'agence :<br />
                            </Paper>
                        </Grid>
                    </Grid>
                    {console.log(property)}
                </Container>
            }
        </div >
    )
}