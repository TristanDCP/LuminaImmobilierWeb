import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
<<<<<<< HEAD
        <Navbar className="bg-green">
            {/* <Navbar.Brand href="#home">INSERER LOGO ICI</Navbar.Brand> */}
            <Nav className="mr-auto navlinks">
                <Nav.Link className="navlinks" href="/">Accueil</Nav.Link>
                <Nav.Link className="navlinks" href='/about'>Page de Test</Nav.Link>
                <Nav.Link className="navlinks" href='/properties'>Propriétés</Nav.Link>
                <Nav.Link className="navlinks" href='/profile'>Profil</Nav.Link>
                <Nav.Link className="navlinks" href='/login'>Se connecter</Nav.Link>
            </Nav>
            {/* <Form inline>
=======
        <>
            <Navbar className="bg-green d-flex justify-content-around">
                {/* <Navbar.Brand href="#home">INSERER LOGO ICI</Navbar.Brand> */}
                <Nav>
                    <Nav.Link className="navlinks"  href="/" activeStyle>Accueil</Nav.Link>
                    <Nav.Link className="navlinks"  href='/about' activeStyle>Page de Test</Nav.Link>
                    <Nav.Link className="navlinks" href='/properties' activeStyle>Propriétés</Nav.Link>
                    <Nav.Link className="navlinks"  href='/profile' activeStyle>Profil</Nav.Link>
                    <Nav.Link className="navlinks" href='/login' activeStyle>Se connecter</Nav.Link>
                    <Nav.Link className="navlinks" href='/signup' activeStyle>S'inscrire</Nav.Link>
                </Nav>
                {/* <Form inline>
>>>>>>> e7cf785b2885b8aee43864f037cb8a3cbcc2ff9b
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form> */}
        </Navbar>
    );
}

export default Navigation;
