import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

class Header extends React.Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-in' }
    }
  
    render () {
      return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Lumina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Agences</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Rechercher</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default Header;