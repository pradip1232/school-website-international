import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";




import f1 from '../images/why choose us 1.webp';
import f2 from '../images/why choose us 1-1.webp'
import f3 from '../images/why choose us 1-2.webp'
import f4 from '../images/why choose us 1-3.webp'
import f5 from '../images/why choose us 1-4.webp'
const WhyChooseFIS = () => {
    return (
        <Container className="why-choose-fis mt-4">
            <h2 className="text-center">
                WHY CHOOSE <span className="text-primary-fis">FIS</span> ?
            </h2>
            <Row className="mt-4">
                <div className="container-custom mt-4">
                    <div className="unique-class">
                        <div className="icon-wrapper">
                            {/* 🔄 */}
                            <img src={f1} alt="f1" />
                        </div>
                        <h5 className="card-title">Finnish Methodology</h5>
                    </div>
                    <div className="unique-class">
                        <div className="icon-wrapper">
                            {/* ⚙️ */}
                            <img src={f2} />
                        </div>
                        <h5 className="card-title">Holistic Development</h5>
                    </div>
                    <div className="unique-class">
                        <div className="icon-wrapper">
                            {/* 🏢 */}
                            <img src={f3} />
                        </div>
                        <h5 className="card-title">State-Of-The-Art Facilities</h5>
                    </div>
                    <div className="unique-class">
                        <div className="icon-wrapper">
                            {/* 🎓 */}
                            <img src={f4} />
                        </div>
                        <h5 className="card-title">Expert Educators</h5>
                    </div>
                    <div className="unique-class">
                        <div className="icon-wrapper">
                            {/* 💻 */}
                            <img src={f5} />
                        </div>
                        <h5 className="card-title">Technology Integration</h5>
                    </div>
                </div>

            </Row>
            <div className="text-center mt-4">
                <Button variant="" className="learn-more-btn">
                    Learn More
                </Button>
            </div>
        </Container>
    );
};

export default WhyChooseFIS;
