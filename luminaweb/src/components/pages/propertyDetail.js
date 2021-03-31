import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PropertyDetails = () => {
    const [property, setProperty] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/property/${id}`)
            .then(result => setProperty(result.data))
    }, [id])

    const goToHomePage = () => {
        history.push('/');
    }

    return (
        <div>
            {
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card style={{ width: '18rem' }} key={property.property.idProperty}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                <Card.Body>
                                    <Card.Title>{property.property.idProperty}</Card.Title>
                                    <Card.Text>
                                        propertyStatus : {property.property.propertyStatus}<br />
                                idUser : {property.property.idUser}<br />
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => goToHomePage()}>Accueil</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default PropertyDetails;