import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Properties = () => {
	const [data, setData] = useState([])
	const history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/v1/properties")
			.then(result => setData(result.data))
	}, [])

	const goToProperty = (id) => {
		history.push(`/property/${id}`);
	}

	return (
		<div>
				{
					data.map(item =>
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
					)
				}
		</div>
	)
};

export default Properties;
