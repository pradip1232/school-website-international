import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./css/Footer.css"; // Include your custom styles
import gg from './images/Group.webp';
import g1 from './images/Group-3.webp';
import g2 from './images/Group-1.webp';
import g3 from './images/Group-2.webp';

const Footer = () => {
    return (
        <footer className="footer bg-primary-footer text-white py-4">
            <Container>
                <Row className="justify-content-between">
                    {/* Links Section */}
                    <Col xs={6} md={2} className="footer-links mb-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="#academics" className="text-white text-decoration-none">Academics</a></li>
                            <li><a href="#philosophy" className="text-white text-decoration-none">Our Philosophy</a></li>
                            <li><a href="#school-models" className="text-white text-decoration-none">School Models</a></li>
                            <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="#methodology" className="text-white text-decoration-none">Methodology</a></li>
                            <li><a href="#finnish-education" className="text-white text-decoration-none">Finnish Education</a></li>
                        </ul>
                    </Col>

                    {/* Privacy Section */}
                    <Col xs={6} md={2} className="footer-privacy mb-4">
                        <h5>Privacy & Terms</h5>
                        <ul className="list-unstyled">
                            <li><a href="#privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
                            <li><a href="#cookies" className="text-white text-decoration-none">Cookie Policy</a></li>
                        </ul>
                    </Col>

                    {/* Explore Section */}
                    <Col xs={6} md={2} className="footer-explore mb-4">
                        <h5>Explore</h5>
                        <ul className="list-unstyled">
                            <li><a href="#careers" className="text-white text-decoration-none">Career Opportunities</a></li>
                            <li><a href="#events" className="text-white text-decoration-none">School Events</a></li>
                        </ul>
                    </Col>

                    {/* Contact Section */}
                    <Col xs={6} md={2} className="footer-contact mb-4">
                        <h5>Contact</h5>
                        <address className="text-white">
                            Finland International School<br />
                            Address: [Insert School Address]<br />
                            Phone: [Insert Phone Number]<br />
                            Email: [Insert Email Address]
                        </address>
                    </Col>

                   {/* Social Media Section */}
<Col xs={12} md={2} className="social-media mb-4">
  <h5>Follow Us</h5>
  <div className="d-flex flex-wrap">
    <ul className="list-unstyled d-flex flex-column me-3">
      <li>
        <a href="#facebook" className="text-white text-decoration-none">
          <img src={gg} alt="Facebook Icon" className="social-icon" />
        </a>
      </li>
      <li>
        <a href="#instagram" className="text-white text-decoration-none">
          <img src={g2} alt="Instagram Icon" className="social-icon" />
        </a>
      </li>
    </ul>
    <ul className="list-unstyled d-flex flex-column">
      <li>
        <a href="#twitter" className="text-white text-decoration-none">
          <img src={g3} alt="Twitter Icon" className="social-icon" />
        </a>
      </li>
      <li>
        <a href="#linkedin" className="text-white text-decoration-none">
          <img src={g1} alt="LinkedIn Icon" className="social-icon" />
        </a>
      </li>
    </ul>
  </div>
</Col>

                </Row>


                <Row className="footer-subscribe text-center">
                    <Col>
                        <p>Stay updated with the latest from FIS!</p>
                        <Form inline className="d-flex justify-content-center">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                className="footer-input me-2"
                            />
                            <Button variant="light" className="footer-subscribe-btn">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>

                <Row className="footer-bottom text-center">
                    <Col>
                        <p>Made with love in India, powered by
                            <a href="https://squibfactory.com/">

                                Squibfactory
                            </a>

                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
