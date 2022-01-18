import Link from "next/link";
import React from "react";
import {Collapse, Container, Nav, Navbar} from "react-bootstrap";

class MainNavBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Link href="/" passHref><Navbar.Brand>MoreliaTalk</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link href="/download" passHref><Nav.Link>Скачать</Nav.Link></Link>
                        <Link href="/about" passHref><Nav.Link>О нас</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default MainNavBar;