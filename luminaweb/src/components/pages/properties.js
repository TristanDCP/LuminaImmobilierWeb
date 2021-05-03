import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid,
	Container,
	CircularProgress,
	Paper,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	leftColumn: {
		order: 1,
		[theme.breakpoints.down('sm')]: {
			order: 2,
		},
	},
	rightColumn: {
		order: 2,
		[theme.breakpoints.down('sm')]: {
			order: 1,
		},
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

const Properties = () => {

	const classes = useStyles();
	const [isLoading, setLoading] = useState(true);
	const [properties, setProperties] = useState([])
	const history = useHistory();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	useEffect(() => {
		// axios.get("http://localhost:8000/api/v1/properties").then( response => {
		axios.get("http://www.share-your-universe.com/public/api/v1/properties").then(response => {
			console.log(response.data);
			setProperties(response.data);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="App"><CircularProgress disableShrink /></div>;
	}

	const goToProperty = (id) => {
		history.push(`/property/${id}`);
	}

	return (
		<div>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} className={classes.leftColumn}>
						<Paper className={fixedHeightPaper}>
							<p>Résultats de recherche</p>
							<Grid container spacing={3} >
								{
									properties.property.map(item =>
										<Grid item xs={12} md={6}>
											<Card key={item.idProperty}>
												<CardActionArea>
													<CardMedia
														component="img"
														alt="Contemplative Reptile"
														height="140"
														image="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
														title="Contemplative Reptile"
													/>
													<CardContent>
														<Typography gutterBottom variant="h5" component="h2">
															{item.idProperty}
														</Typography>
														<Typography variant="body2" color="textSecondary" component="p">
															propertyStatus : {item.propertyStatus}<br />
													idUser : {item.idUser}<br />
														</Typography>
													</CardContent>
												</CardActionArea>
												<CardActions>
													<Button variant="primary" onClick={() => goToProperty(item.idProperty)}>Voir plus de détails</Button>
												</CardActions>
											</Card>
										</Grid>
									)
								}
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} className={classes.rightColumn}>
						<Paper className={fixedHeightPaper}>
							<p>Tags</p>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
};

export default Properties;