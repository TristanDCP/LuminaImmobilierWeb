import React from 'react';
import ReactDOM from 'react-dom';
import { getLastPropertyForSales } from '../../api/luminaAPI'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


class LastPropertyForSales extends React.Component  {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-out' }
    }

    // ComponentDidMount() {
    //     getLastPropertyForSales() => {
    // Créer la fonction qui récupere les données dans l'api et apeller le resultat ici

    //     }
    // }

  
    render () {
      return (
          
    <Container fluid="md">
    <Row>
        <Col><p></p></Col>
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titre</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col><p></p></Col>
    </Row>
    </Container>
          
      );
    }
}

export default LastPropertyForSales;