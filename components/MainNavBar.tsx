import React from "react";
import {Collapse, Container, Nav, Navbar} from "react-bootstrap";

class MainNavBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">MoreliaTalk</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/download">Скачать</Nav.Link>
                        <Nav.Link href="/about">О нас</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default MainNavBar;