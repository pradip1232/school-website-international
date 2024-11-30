import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './css/header.css';
import logo from '../components/images/FIS+logo 1.webp';
import { Helmet } from 'react-helmet-async';

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
        <>
            {/* <Helmet>
                <link rel='icon' type='image/webp' href={logo} />
            </Helmet> */}
            <header>
                {/* Top Strip */}
                <div
                    className={`bg-light py-2 top-strip ${showTopStrip ? 'show' : 'hide'}`}
                >
                    <Container>
                        <Row className="align-items-center top-side-row-navbar">
                            {/* Phone and Email Row */}
                            <Col xs={12} md={4} className="text-center text-md-start">
                                <Row className="d-flex justify-content-center justify-content-md-start top-side-navbar-phone-email">
                                    <Col md={5} className="d-flex align-items-center justify-content-center justify-content-md-start">
                                        <span>
                                            <i className="fas fa-phone-alt me-2"></i>
                                            +91 00000 00000</span>
                                    </Col>
                                    <Col md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
                                        {/* Email with Icon */}
                                        <i className="fas fa-envelope me-2"></i>
                                        <span>finlandinternational@gmail.com</span>
                                    </Col>
                                </Row>
                            </Col>

                            {/* Logo Section */}
                            <Col xs={12} md={4} className="text-center top-navbar-colmmn-logo">
                                <Navbar.Brand href="#home">
                                    <img
                                        src={logo}
                                        alt="Finland International School"
                                        style={{ height: '50px' }}
                                    />
                                </Navbar.Brand>
                            </Col>

                            {/* Search Input and Button */}
                            <Col xs={12} md={3} className="text-end justify-conntent-end text-md-end top-navbar-searchbutton">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <Button variant="" size="sm" className="input-group-text">
                                        🔍
                                    </Button>
                                </div>
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
                        <Navbar.Toggle aria-controls="basic-navbar-nav bottom-down-navbar-button" />
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
        </>
    );
};

export default Header;
