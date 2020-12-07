import React from 'react';
import { Button, Nav, Navbar, Form } from 'react-bootstrap';
import './Header.css';
import logo from '../../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faHome, faPaperPlane, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (

    
    <div className="container-fluid">
        <Navbar className="py-3" expand="lg">
                 <Navbar.Brand href="#home"><img className="img-fluid" src={logo} alt="logo"/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                <Nav.Link className="nav-manu pr-3 active" href="home"> <FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link className="nav-manu pr-3" href="about"><FontAwesomeIcon icon={faUserCircle} /> About</Nav.Link>
                <Nav.Link className="nav-manu pr-3" href="work"><FontAwesomeIcon icon={faBuilding} /> Work</Nav.Link>
                <Nav.Link className="nav-manu pr-3" href="contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Nav.Link>
                <Nav.Link className="nav-manu pr-3" href="achievements"><FontAwesomeIcon icon={faPaperPlane} /> Achievements</Nav.Link>
                </Nav>
                <Form inline>
                <Button className="resume pl-3"> <Nav.Link className="resume2 p-0 m-0"  href="https://drive.google.com/file/d/1dxDl7pyhDd-hPd-auKiL73Dh0MJ8FAun/view?usp=sharing">Resume</Nav.Link></Button>
                </Form>
            </Navbar.Collapse>
    </Navbar>
    </div>
      

    );
};

export default Header;