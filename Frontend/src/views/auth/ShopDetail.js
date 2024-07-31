import React from 'react';
import { Row, Col, Card, CardBody, Carousel, CarouselItem, CarouselControl, Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import img1 from '/src/assets/images/products/s1.jpg';
import img2 from '/src/assets/images/products/s2.jpg';
import img3 from '/src/assets/images/products/s3.jpg';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

const ShopDetail = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 1 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img
        src={item.src}
        alt={item.altText}
        width="100%"
        style={{
          height: '500px',
          objectFit: 'cover',
          borderRadius: '15px', // Adjust the radius to make curved corners
          border: '2px solid #fff', // Add border for a stylish look
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
        }}
      />
    </CarouselItem>
  ));
  return (
    <div>
      {/* <BreadCrumbs /> */}
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="6">
                  <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={previous}
                    />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                  </Carousel>
                </Col>
                <Col lg="6">

 <center><h1 style={{ fontFamily: 'Dhurjati, sans-serif', marginTop: '1rem', marginBottom: '1rem', fontSize: '6rem' }}>ℚℝ𝕐ℙ𝕋𝕄𝔸𝕀𝕃</h1>
 </center> 
<br></br>
<br></br>

<h1 style={{ fontFamily: 'Quantico, serif', marginTop: '1rem', marginBottom: '1rem' }}>
  <center><b> 𝚆𝚛𝚊𝚙 𝚢𝚘𝚞𝚛 𝚠𝚘𝚛𝚍𝚜 𝚒𝚗 𝙰𝚛𝚖𝚘𝚛</b></center>
 <center>𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚒𝚗𝚐 𝚘𝚞𝚛 𝚜𝚎𝚌𝚞𝚛𝚎 𝚎𝚖𝚊𝚒𝚕 𝚊𝚙𝚙</center>
</h1>
  <div className="d-flex"></div>
  <br />
  <br />
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>

    <center>
    <Link to="/auth/loginformik">
      <Button color="primary" className="me-2" style={{ fontSize: '1.2rem' }}>
        Login
      </Button>
    </Link>
    <Link to="/auth/registerformik">
     
      <Button color="dark" style={{ fontSize: '1.2rem' }}>
        <b>Register</b>
      </Button>
     
    </Link>
  </center>
</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <h4>Description</h4>
              <br />
              <h5>
                QryptMail offers a secure and efficient way to communicate with its quantum-secured email service. Our advanced features and robust security protocols ensure that your communications stay confidential and protected.
              </h5>
              <br />
              <h5>
                Whether you're an individual or a business, QryptMail provides the tools you need for private and reliable communication. Upgrade to QryptMail for unparalleled security and a seamless email experience.
              </h5>
              <br />
              <h5>
                Experience the future of secure communication with QryptMail. Log in to your account to access a range of exclusive features and personalized services tailored to your individual needs.
              </h5>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShopDetail;