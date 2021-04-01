import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Properties = () => {

	const [isLoading, setLoading] = useState(true);
	const [properties, setProperties] = useState([])
	const history = useHistory();

	useEffect(() => {
		// axios.get("http://localhost:8000/api/v1/properties").then( response => {
		axios.get("http://www.share-your-universe.com/public/api/v1/properties").then(response => {
			console.log(response.data);
			setProperties(response.data);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className="App">Loading...</div>;
	}

	const goToProperty = (id) => {
		history.push(`/property/${id}`);
	}

	return (
		<div>
			<Container>
				<Row>
					{
						properties.property.map(item =>
							<Col md={4}>
								<Card style={{ width: '18rem' }} key={item.idProperty}>
									<Card.Img variant="top" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
									<Card.Body>
										<Card.Title>{item.idProperty}</Card.Title>
										<Card.Text>
											propertyStatus : {item.propertyStatus}<br />
									idUser : {item.idUser}<br />
										</Card.Text>
										<Button variant="primary" onClick={() => goToProperty(item.idProperty)}>Voir plus de détails</Button>
									</Card.Body>
								</Card>
							</Col>
						)
					}
				</Row>
			</Container>
		</div>
	)
};

export default Properties;
