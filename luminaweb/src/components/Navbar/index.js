import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
            <Navbar className="bg-green d-flex justify-content-around">
                { <Navbar.Brand href="/"><img src="./luminaweb/src/assets/img/luminalogo.png"></img></Navbar.Brand>}
                <Nav>
                    <NavDropdown title="Web" id="basic-nav-dropdown">
                        <NavDropdown.Item className="navlinks"  href="/" activeStyle>Accueil</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks"  href='/about' activeStyle>Page de Test</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/properties' activeStyle>Propriétés</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks"  href='/profile' activeStyle>Profil</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/login' activeStyle>Se connecter</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/signup' activeStyle>S'inscrire</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/admin' activeStyle>Console admin</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Desktop" id="basic-nav-dropdown">
                        <NavDropdown.Item className="navlinks"  href='/homeDesktop' activeStyle>Page d'Accueil</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/propertyListDesktop' activeStyle>Propriétés</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks"  href='/statsDesktop' activeStyle>Statistiques</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/addPropertyDesktop' activeStyle>Ajout de propriétés</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/updatePropertyDesktop' activeStyle>Mise à jour des propriétés</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/loginDesktop' activeStyle>Login Desktop</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Mobile" id="basic-nav-dropdown">
                        <NavDropdown.Item className="navlinks"  href="/homeMobile" activeStyle>Accueil</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks"  href='/planningMobile' activeStyle>Prise de RDV</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/registerMobile' activeStyle>S'inscrire</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks"  href='/appartmentStateMobile' activeStyle>Etat des lieux</NavDropdown.Item>
                        <NavDropdown.Item className="navlinks" href='/loginMobile' activeStyle>Se connecter</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form> */}
        </Navbar>
    );
}

export default Navigation;
