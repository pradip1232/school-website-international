import React, { useState } from 'react'
import ff from '../images/ngayhanhphuc-1 1.png';
import f4 from '../images/4 1.webp';
import { Container, Row, Col, Button, Card, Tab, Nav } from 'react-bootstrap';
import f1 from '../images/VYF00060 1.webp';
import f2 from '../images/VYF07161 1.webp'
import f3 from '../images/VYF00060 1.webp'
import f41 from '../images/b4279f490e63ea3db372 1.webp'
import f5 from '../images/VYF06264_0 1.webp'
import f6 from '../images/5_0 1.webp'
import f7 from '../images/2X5A0144 1.webp'
import f8 from '../images/IMG-20240829-WA0136 1.webp'
import WhyChooseFIS from './WhyChooseFIS';
import group1 from '../images/Group 1.webp';
import modal from '../images/models 1.webp';
import grp2 from '../images/Group 2.webp';
import girl from '../images/Image.webp';
import boy from '../images/2X5A1737 1.webp';
import flower from '../images/6 1.webp';
import why from '../images/why 1.webp';
import mn1 from '../images/John 1.webp';
import mn2 from '../images/kati 1.webp';
import mn3 from '../images/Nikke 1.webp';
import dddd from '../images/d406caba63e90c195f5d65d98a35b68f [Recovered] 1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import m1 from '../images/methadology 1.webp';
import m2 from '../images/methadology 1-1.webp';
import m3 from '../images/methadology 1-2.webp';
import m4 from '../images/methadology q1 1.webp';

const facultyData = [
    {
        name: "John Hart",
        title: "Director of Digital Learning & Innovation",
        imgSrc: mn1,
    },
    {
        name: "Kati Loponen",
        title: "CEO EduCluster Finland",
        imgSrc: mn2,
    },
    {
        name: "Nikke Keskinen",
        title: "Director of Academics, Corenic Inc.\nFounding Principal of Finland International Schools",
        imgSrc: mn3,
    },
];


const HeroSection = () => {



    const settings = {
        dots: true, // Show pagination dots
        infinite: true, // Infinite loop of slides
        speed: 500, // Speed of slide transition
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the autoplay speed (3 seconds)
        arrows: false, // Disable next/prev arrows
    };


    const [activeTab, setActiveTab] = useState("plp");
    // const [activeTab2, setActiveTab2] = useState("plp");







    const cardsData = [
        {
            id: 1,
            title: 'Curriculum Overview',
            description:
                'FIS offers a dynamic curriculum that blends the best of Finnish and Indian educational practices.',
            icon: 'bi bi-book', // Use Bootstrap icons
            className: 'curriculum-card',
        },
        {
            id: 2,
            title: 'Personalized Learning Plans (PLP)',
            description:
                'FIS offers a dynamic curriculum that blends the best of Finnish and Indian educational practices.',
            icon: 'bi bi-person-lines-fill',
            className: 'plp-card',
        },
        {
            id: 3,
            title: 'Learning Methodologies',
            description:
                'FIS offers a dynamic curriculum that blends the best of Finnish and Indian educational practices.',
            icon: 'bi bi-lightbulb',
            className: 'methodologies-card',
        },
        {
            id: 4,
            title: 'Assessment & Evaluation',
            description:
                'FIS offers a dynamic curriculum that blends the best of Finnish and Indian educational practices.',
            icon: 'bi bi-check-circle',
            className: 'evaluation-card',
        },
    ];










    return (
        <>
            <section className='herohome-section'>
                <img src={ff} className='hero-img' />
                <div className='blue-welcome-container-home'>
                    <h2>Welcome to Finland International School (FIS)</h2>
                    <p>At Finland International School (FIS), we believe in transforming education by bringing the best of Finland’s world-renowned learning methodologies to India. Our partnership with EduCluster Finland, combined with the legacy of Goenka Inc., ensures that our students receive a holistic education that is both innovative and rooted in strong values. We are committed to nurturing the leaders, thinkers, and innovators of tomorrow.</p>
                </div>
                <div className='cloud-home-img'>
                    <img src={f4} className="cloud-img" />
                </div>
            </section>




            <section className="education-section py-5">
                <Container>
                    {/* Heading */}
                    <Row className='justify-content-center '>
                        <Col lg={8} md={10} sm={12}>

                            <div className="text-center mb-5">
                                <h2 className="main-heading text-uppercase">
                                    Experience the Best of <br /><span className="highlight-green">Finnish Education</span> Right Here in <span className="highlight-pink">India</span>
                                </h2>
                                <h4 className="sub-heading text-uppercase text-pink">Transforming Education with the Finnish Advantage</h4>
                                <p className="description text-muted">
                                    Finland International School (FIS) is where the excellence of Finnish education meets the vibrancy of Indian culture. Partnering with EduCluster Finland, FIS brings an unparalleled educational experience to your doorstep, combining the best of both worlds. Our school offers a student-centric approach that focuses on holistic development, critical thinking, and creativity, ensuring that every child flourishes.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    {/* Image Grid */}
                    <Row className="g-4">
                        <Col xs={12} sm={6} md={3}>
                            <img src={f1} alt="Education Activity 1" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f2} alt="Education Activity 2" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f3} alt="Education Activity 3" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f41} alt="Education Activity 4" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f5} alt="Education Activity 5" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f6} alt="Education Activity 6" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f7} alt="Education Activity 5" className="img-fluid rounded shadow" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={f8} alt="Education Activity 6" className="img-fluid rounded shadow" />
                        </Col>
                    </Row>
                </Container>
            </section >














            <section className="about-section py-5">
                <Container>
                    <Row className="align-items-center">
                        {/* Image Section */}
                        <Col md={6} className="position-relative text-center">
                            <div className="image-wrapper">
                                <img
                                    src={group1}
                                    alt="About Finland School"
                                    className="img-fluid main-image"
                                />
                                {/* <div className="overlay-image">
                                    <img
                                        src={group1}
                                        alt="Children Group"
                                        className="img-fluid"
                                    />
                                </div> */}
                                <div className="image-caption bg-primary-edu text-white px-3 py-2">
                                    About Finland <br />International School
                                </div>
                            </div>
                        </Col>
                        {/* Text Section */}
                        <Col md={6}>
                            <h2 className="edu-section-title">
                                Where <span className="text-primary-edu">Education</span><br /> Meets{' '}
                                <span className="text-primary-edu">Innovation</span>
                            </h2>
                            <p className="edu-section-description">
                                Discover the unique blend of Finnish pedagogy and Indian values that
                                defines Finland International School (FIS). We’re committed to
                                nurturing well-rounded, critical thinkers who are ready to thrive in a
                                global world.
                            </p>
                            <Button variant="" className="edu-learn-more-btn">
                                Learn More About Us
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>







            <section className="academics-section py-5">
                <Container>
                    <Row>
                        <Col md={10} className='text-left justify-content-start'>
                            <h2 className="academics-section-title text-centerr ">
                                <span className="text-primary3">Academics at Finland International School</span>
                                <br />
                            </h2>
                            <h4 className="academics-section-subtitle">Where Learning Meets Passion</h4>
                            <p className="text-centerr ">
                                <em>An Innovative Approach to Holistic Education</em>
                            </p>
                        </Col>
                        <Col md={2}>
                            <div className="text-center ">
                                <Button variant="" className="main-learn-more-btn">
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col md={6} lg={3} className="mb-4">
                            <Card className='custom-card first-cards-home'>

                                <Card.Body>

                                    <Card.Title className="card-title">Curriculum Overview:</Card.Title>
                                    <hr />
                                    <Card.Text className="card-description">
                                        FIS ofers a dynamic curriculum that blends the best of Finnish and Indian educational practices.
                                    </Card.Text>
                                    <Button variant="link" className="learn-more-btn">
                                        Learn More
                                    </Button>
                                    <div className="icon-wrapper mb-3">
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card className='custom-card second-cards-home'>
                                <Card.Body>

                                    <Card.Title className="card-title">Personalized Learning Plans (PLP):</Card.Title>
                                    <hr />
                                    <Card.Text className="card-description">
                                        FIS ofers a dynamic curriculum that blends the best of Finnish and Indian educational practices.                                    </Card.Text>
                                    <Button variant="link" className="learn-more-btn">
                                        Learn More
                                    </Button>
                                    <div className="icon-wrapper mb-3">
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card className='custom-card third-cards-home'>
                                <Card.Body>

                                    <Card.Title className="card-title">Learning Methodologies:</Card.Title>
                                    <hr />
                                    <Card.Text className="card-description">
                                        FIS ofers a dynamic curriculum that blends the best of Finnish and Indian educational practices.                                    </Card.Text>
                                    <Button variant="link" className="learn-more-btn">
                                        Learn More
                                    </Button>
                                    <div className="icon-wrapper mb-3">
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card className='custom-card fourth-cards-home'>
                                <Card.Body>

                                    <Card.Title className="card-title">Assessment & Evaluation:</Card.Title>
                                    <hr />
                                    <Card.Text className="card-description">
                                        FIS ofers a dynamic curriculum that blends the best of Finnish and Indian educational practices.
                                    </Card.Text>
                                    <Button variant="link" className="learn-more-btn">
                                        Learn More
                                    </Button>
                                    <div className="icon-wrapper mb-3">
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </section>











            <section>


                <Container className="school-models-section py-5">
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="section-title">OUR SCHOOL MODELS</h2>
                            <p className="section-subtitle">
                                OUR SCHOOLS: A COMPREHENSIVE LEARNING EXPERIENCE
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        {/* Text Section */}
                        <Col md={5} className="text-section mb-4">
                            <h3 className="school-title">FINLAND INTERNATIONAL SCHOOL (K–12)</h3>
                            <hr className="divider mb-3" />
                            <p className="school-description">
                                Finland International School (K–12) offers a unique blend of Finnish
                                innovation and Indian tradition, fostering an environment where
                                students excel academically and grow holistically.
                            </p>
                            <Button variant="danger" className="learn-more-btn">
                                Learn More
                            </Button>
                        </Col>
                        {/* Image Section */}
                        <Col md={5} className="text-center">
                            <img
                                src={modal} // Replace with actual image path
                                alt="K-12 Illustration"
                                className="img-fluid school-image"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>


            <WhyChooseFIS />


            <section className='campusfacilities-section'>

                <Container className="campus-facilities-section py-5">
                    <Row className="text-center justify-content-center mb-4">
                        <Col md={8}>
                            <h2 className="campus-section-title">CAMPUS & FACILITIES</h2>
                            <h3>A Space Designed for Inspiration</h3>
                            <hr />
                            <p className="campus-section-subtitle">State-of-the-Art Infrastructure Supporting Holistic Learning</p>

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='modern-row-campus'>
                        <Col md={6}>
                            <h2>Modern Classrooms</h2>
                            <p>
                                Our classrooms are designed to be flexible, collaborative spaces that foster creativity and critical  thinking.
                            </p>
                            <Button variant="" className="learn-more-btn">
                                Learn More
                            </Button>
                        </Col>
                        <Col md={6}>
                            <h2>Robotic Lab & <br /> Technology Integration</h2>
                            <p>FIS boasts a cutting-edge Robotic Lab where students learn coding, robotics, and AI as part of their  regular curriculum.</p>
                            <Button variant="" className="learn-more-btn">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                    <Row className='sports-row-campus'>
                        <Col md={6}>
                            <h2>Sports & Extracurricular Activities</h2>
                            <p>
                                We believe in the importance of physical education and extracurricular activities as part of a wellrounded education.                            </p>
                            <Button variant="" className="learn-more-btn">
                                Learn More
                            </Button>
                        </Col>
                        <Col md={6}>
                            <h2>Creative Studios & Skill Builders</h2>
                            <p>FIS boasts a cutting-edge Robotic Lab where students learn coding, robotics, and AI as part of their  regular curriculum.</p>
                            <Button variant="" className="learn-more-btn">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </section>






            <section className="campuses-guwahati-section-container">
                <h2 className="campuses-heading text-center">CAMPUSES</h2>
                <h3 className="campus-sub-heading text-center">Where Innovation Meets Learning</h3>
                <div className="images-guwahati-container">
                    {/* Main background image */}
                    <div className="campuses-guwahati-section">
                        {/* Overlay text on the background */}
                        <div className="campuses-guwahati-overlay">

                            <h2 className="guwahati-title">GUWAHATI</h2>
                            <p className="guwahati-sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button className='learn-more-btn' >Read More</Button>
                        </div>
                        {/* Cloud image positioned at the bottom */}
                        <img src={f4} alt="Cloud Guwahati" className="cloud-images-guwahati" />
                    </div>
                </div>
            </section>









            <section>
                <Container fluid className="-join-the-finland-section py-5">
                    <Row className="align-items-center justify-content-center">
                        {/* Image Section */}
                        <Col md={5} className="text-end -join-the-finland-section-image mb-4 mb-md-0">
                            <img
                                src={girl}
                                alt="Join Finland School"
                                className="img-fluid"
                            />
                        </Col>
                        {/* Text Section */}
                        <Col md={4} className="-join-the-finland-section-text">
                            <h2 className="-join-the-finland-section-title">
                                Join the <span className="highlight">Finland International School Family</span>
                            </h2>
                            <p className="-join-the-finland-section-subtitle">
                                WHERE EVERY CHILD'S EDUCATIONAL JOURNEY IS UNIQUE
                            </p>
                            <p className="-join-the-finland-section-description">
                                Welcome to Finland International School, where we shape future global citizens. Our
                                admissions process is simple and transparent, ensuring that every aspiring student
                                and family feels welcomed. Follow these steps to embark on an enriching educational
                                journey with us:
                            </p>
                            <div className="-join-the-finland-section-buttons">
                                <Button variant="danger" className="-join-the-finland-section-btn">
                                    Apply Now
                                </Button>
                                <Button variant="outline-danger" className="-join-the-finland-section-btn ml-2">
                                    Visit Our Campus
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>










            <section>
                <Container className="finland-faculty py-5">
                    <h2 className="text-center finland-faculty-title-m mb-4">
                        <span className="text-successss">FINLAND</span> <span className="text-dangerrr">FACULTY</span>
                    </h2>
                    <Row>
                        {facultyData.map((faculty, index) => (
                            <Col
                                key={index}
                                md={4}
                                sm={12}
                                className="mb-4 d-flex justify-content-center finland-faculty-col"
                            >
                                <Card className="finland-faculty-card text-center">
                                    <div className='finland-faculty-cards-img text-center'>

                                        <Card.Img
                                            variant="top"
                                            src={faculty.imgSrc}
                                            alt={faculty.name}
                                            className="finland-faculty-image"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="finland-faculty-name">{faculty.name}</Card.Title>
                                        <Card.Text className="finland-faculty-title">{faculty.title}</Card.Text>
                                        <Button variant="" className="finland-faculty-button">
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* our metho section */}
            <section className='our-mthodology-section py-5'>
                <Container className="our-mthodology-container text-center py-5">
                    <h1 className='Our-Methodology-heading'>
                        Our Methodology
                    </h1>
                    <h3 className='methodology-subheading'>The Finnish Approach to Education</h3>
                    <h5 className='methlodology-desccription'>At FIS, we embrace Finnish principles of personalized, student-centered learning. Our methodology emphasizes holistic development, experiential learning, creativity, and problem-solving, fostering confident, critical thinkers with a lifelong love for learning.</h5>
                    <h3 className='methodology-bold-des'>Our collaboration with EduCluster Finland brings decades of Finnish educational expertise, ensuring FIS stays at the forefront of innovation while tailoring global best practices to the Indian context.</h3>
                </Container>
                <Container className='ourethodology-card-container'>
                    <img src={dddd} alt="Background" className='img-fluid w-100 tedi-medi-bg-img' />
                    <div className='card-container-row-meth'>
                        <Row className="w-100">
                            <Col md={3} xs={12}>
                                <Card className='methodology-cards-1'>
                                    <div>

                                        <img src={m1} alt="Methodology 1" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Student-Centered Learning</Card.Title>
                                        <Card.Subtitle>
                                            We place the student at the center of the learning process, tailoring our approach to meet the unique needs of each child.
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={12}>
                                <Card className='methodology-cards-2'>
                                    <div >
                                        <img src={m2} alt="Methodology 2" />
                                    </div>
                                    {/* <img src={m2} alt="Methodology 2" /> */}
                                    <Card.Body>
                                        <Card.Title>Experiential Education</Card.Title>
                                        <Card.Subtitle>
                                            Learning at FIS is hands-on and experience-driven. Students are encouraged to explore, experiment, and learn through real-world applications.
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={12}>
                                <Card className='methodology-cards-3'>
                                    <div>

                                        <img src={m3} alt="Methodology 3" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Holistic Development</Card.Title>
                                        <Card.Subtitle>
                                            Our curriculum is designed to nurture all aspects of a child's development, including cognitive, emotional, social, and physical growth.
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={12}>
                                <Card className='methodology-cards-4'>
                                    <div>

                                        <img src={m4} alt="Methodology 4" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Technology Integration</Card.Title>
                                        <Card.Subtitle>
                                            We integrate the latest technology into our classrooms to enhance learning experiences and prepare students for the digital age.
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>


            </section>


            <section>
                <h2 className="text-center how-it-works-title mb-4">HOW IT WORKS</h2>
                <Container fluid className="how-it-works py-5">
                    <Tab.Container
                        id="how-it-works-tabs"
                        activeKey={activeTab}
                        onSelect={(key) => setActiveTab(key)}
                    >
                        <Nav
                            variant="pills"
                            className="justify-content-center how-it-works-nav mb-3"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="plp" className="how-it-works-tab">
                                    Personalized Learning Plans (PLPs)
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="homework" className="how-it-works-tab">
                                    No Homework Policy
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="collaborative" className="how-it-works-tab">
                                    Collaborative Learning
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="plp">
                                <p className="how-it-works-content text-center">
                                    Every student has a PLP that is regularly reviewed and updated
                                    to ensure they are on track to meet their goals.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="homework">
                                <p className="how-it-works-content text-center">
                                    Students benefit from a no-homework policy, allowing them to focus
                                    on personal development and family time.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="collaborative">
                                <p className="how-it-works-content text-center">
                                    Collaborative learning encourages teamwork and helps students
                                    develop essential interpersonal skills.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </section>








            <section>
                <Container className="why-finnish-education mt-4">
                    <Row className="align-items-center">
                        {/* Text Section */}
                        <Col xs={12} md={8} className="text-section">
                            <h2 className="section-title">
                                Why <span className="text-primary">Finnish Education?</span>
                            </h2>
                            <p className="section-subtitle">
                                Discover Why Finnish Education is Globally Acclaimed and How FIS
                                Brings This Revolution to India.
                            </p>
                            <p className="section-description">
                                The Finnish education system is celebrated worldwide for its
                                holistic and student-centered approach. At its core, Finnish
                                education prioritizes the well-being and overall development of the
                                child, rather than just academic performance. This focus on the
                                whole child—encompassing intellectual, emotional, social, and
                                physical growth—is what makes Finnish education so unique and
                                effective.
                            </p>
                            <Button variant="danger" className="read-more-btn">
                                Read More
                            </Button>
                        </Col>

                        {/* Image Section */}
                        <Col xs={12} md={4} className="image-section text-center">
                            <img
                                // src="https://via.placeholder.com/200x200?text=Why"
                                src={why}
                                alt="Why Finnish Education"
                                className="why-image"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>












            <section>
                <Container className="what-parents-and-students-say py-5">
                    <Row className="align-items-stretch">
                        {/* Image Section */}
                        <Col xs={12} md={4} className="image-section text-center d-flex flex-column">
                            <img
                                src={boy} // Replace with actual image URL
                                alt="Parent and student"
                                className="testimonial-image img-fluid rounded mb-3"
                            />
                        </Col>

                        {/* Testimonial Section */}
                        <Col xs={12} md={4} className="testimonial-section d-flex flex-column">
                            <Slider {...settings}>
                                {/* Card 1 */}
                                <Card className="testimonial-card p-4 flex-grow-1 mx-3">
                                    <Card.Text className="quote">
                                        <span className="quote-icon">“</span>
                                        The school is not just about academics; it’s about growing as a person. The interactive learning, caring teachers, and extracurricular activities make every day exciting. I love being part of this amazing community!
                                    </Card.Text>
                                    <Card.Text className="author">
                                        <strong>Mr. and Mrs. Sharma</strong> / Parents
                                    </Card.Text>
                                </Card>
                                {/* Card 2 */}
                                <Card className="testimonial-card p-4 flex-grow-1 mx-3">
                                    <Card.Text className="quote">
                                        <span className="quote-icon">“</span>
                                        We couldn't be happier with the education our child is receiving. The teachers are outstanding and genuinely care about the students.
                                    </Card.Text>
                                    <Card.Text className="author">
                                        <strong>Mr. and Mrs. Kapoor</strong> / Parents
                                    </Card.Text>
                                </Card>
                                {/* Card 3 */}
                                <Card className="testimonial-card p-4 flex-grow-1 mx-3">
                                    <Card.Text className="quote">
                                        <span className="quote-icon">“</span>
                                        Amazing faculty and great extracurricular activities that help children grow holistically. Highly recommended!
                                    </Card.Text>
                                    <Card.Text className="author">
                                        <strong>Ms. Verma</strong> / Parent
                                    </Card.Text>
                                </Card>
                            </Slider>
                        </Col>


                        {/* Third Card */}
                        <Col xs={12} md={4} className="third-card-testimonial d-flex flex-column">
                            <Card className="flex-grow-1">
                                <img src={flower} alt="Decorative Flower" />
                                <Card.Body className="text-center">
                                    <h1>What Parents and Students Say</h1>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroSection
