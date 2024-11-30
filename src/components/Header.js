import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './css/header.css';

const Header = () => {
    const [showTopStrip, setShowTopStrip] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showStickyNavbar, setShowStickyNavbar] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    // const [lastScr/ollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                // Scrolling down, make the navbar fixed
                setIsFixed(true);
            } else {
                // At the top, make the navbar sticky
                setIsFixed(false);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header>
            {/* Top Strip */}
            <div
                className={`bg-light py-2 top-strip ${showTopStrip ? 'show' : 'hide'}`}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={4} className="text-center text-md-start">
                            <Row className='d-flex'>

                                <span>📞 +91 00000 00000</span>
                                <span className="ms-3">✉️ finlandinternational@gmail.com</span>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="text-center">
                            <Navbar.Brand href="#home">
                                <img
                                    src="path_to_logo.png" // Replace with the actual logo path
                                    alt="Finland International School"
                                    style={{ height: '50px' }}
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col xs={12} md={4} className="text-center text-md-end">
                            <input type="text" className="me-2" placeholder="Search" />
                            <Button variant="outline-primary" size="sm">
                                🔍
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Sticky Navbar */}
            {/* {showStickyNavbar && ( */}
            <Navbar
                expand="lg"
                variant="light"
                className={`p-0 bottom-navbar ${isFixed ? 'fixed' : 'sticky'}`}
            // fixed="top"
            >
                <Container className='bottom-down-navbar'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#28a745' }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#about"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#007bff' }}
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                href="#academics"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#17a2b8' }}
                            >
                                Academics
                            </Nav.Link>
                            <Nav.Link
                                href="#philosophy"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#dc3545' }}
                            >
                                Our Philosophy
                            </Nav.Link>
                            <Nav.Link
                                href="#models"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#ffc107' }}
                            >
                                School Models
                            </Nav.Link>
                            <Nav.Link
                                href="#campus"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#dc3545' }}
                            >
                                Campus & Facilities
                            </Nav.Link>
                            <Nav.Link
                                href="#methodology"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#28a745' }}
                            >
                                Methodology
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#007bff' }}
                            >
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                href="#education"
                                className="btn text-white mx-11"
                                style={{ backgroundColor: '#dc3545' }}
                            >
                                Finnish Education
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* )} */}
        </header>
    );
};

export default Header;
