import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function PropertyDetails() {

    const [isLoading, setLoading] = useState(true);
    const [property, setProperty] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:8000/api/v1/property/${id}`).then(response => {
        axios.get(`http://www.share-your-universe.com/public/api/v1/property/${id}`).then(response => {
            console.log(response.data);
            setProperty(response.data);
            setLoading(false);
        });
    }, [id]);
    
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    const goToHomePage = () => {
        history.push('/');
    }

    return (
        <div>
            {
                <Container>
                    { console.log(property) }
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card style={{ width: '18rem' }} key={property.property.idProperty} >
                                <Card.Img variant="top" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                <Card.Body>
                                    <Card.Title>{property.property.idProperty}</Card.Title>
                                    <Card.Text>
                                        propertyStatus : {property.property.propertyStatus}<br />
                                        idUser : {property.property.idUser}<br />
                                        {
                                            property.parameters.map(param =>
                                                <li>{param.keyParameter} : {param.valueParameter}</li>
                                            )
                                        }
                                        {
                                            property.pieces.map(piece =>
                                                <ul>
                                                    <li>Type de pièce : {piece.pieceName}</li>
                                                    <li>Surface : {piece.pieceSurface}</li>
                                                </ul>
                                            )
                                        }
                                        {
                                            property.pictures.map(picture =>
                                                <li>{picture.pictureURL}</li>       
                                            )
                                        }
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
