import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';


// Le header gérera une partie de la navigation

class Header extends React.Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-in' }
    }
  
    render () {
      return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Lumina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href ="/login">Login</Nav.Link>
            <Nav.Link href="#link">Agences</Nav.Link>
            { <NavDropdown title="Rechercher" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Acheter un bien</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Louer un bien</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Vendre mon bien</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Faire louer mon bien</NavDropdown.Item>
            </NavDropdown> }
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="immeuble à vendre .." className="mr-sm-2" />
            <Button variant="outline-success">Rechercher</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default Header;