import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import Icon2 from '../assets/images/background/icon2.jpg';

const About = () => {
  const features = [
    {
      title: 'End to end encryption:',
      desc: 'QryptMail is a private email service leveraging open source, independently audited end-to-end encryption and zero-access encryption, fortified with quantum technology. ',
      icon: 'bi-lock',
    },
    {
      title: 'Free private email:',
      desc: 'Qrypt Mail offers free private email, prioritizing your right to privacy. Upgrade for additional features and support our mission for a better internet.',
      icon: 'bi-envelope',
    },
    {
      title: 'Windows -OS:',
      desc: 'Whether you\'re on your Windows computer or laptop, you can securely read and respond to emails using the QryptMail app for Windows.',
      icon: 'bi-windows',
    },
    {
      title: 'An ad-free inbox:',
      desc: 'Qrypt Mail is funded by subscriptions to our paid plans, not by invading your privacy and serving you advertisements. Unlike other email services, we have no motivation to use your data to deliver surveillance-based advertising in your inbox.',
      icon: 'bi-inbox',
    },
    {
      title: 'Block the trackers in your emails',
      desc: 'Qrypt Mail comes with advanced tracking protection by default to stop companies from snooping on your email activities with invisible trackers. By using Qrypt Mail, you can control whether companies know if you opened their marketing emails.',
      icon: 'bi-eye-slash',
    },
    {
      title: 'Easily move your data from Google',
      desc: 'Easy Switch lets you effortlessly import existing emails, contacts, and calendars from Gmail and other providers to Qrypt.',
      icon: 'bi-arrow-left-right',
    },
  ];

  return (
    <Row>
      <Col>
        {/* Header */}
        <Row>
          <Col className="text-center">
            <h1 className="text-white fw-bold">Welcome to Qrypt Mail</h1>
            <p className="text-muted">
              Experience the future of secure communication with Qrypt Mail. Our private email service combines cutting-edge quantum key distribution technology with robust end-to-end encryption, ensuring your communications stay confidential and secure.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <img src={Icon2} alt="Icon2" />
        </Row>

        {/* Content */}
        <Row>
          {features.map((feature, index) => (
            <Col lg="4" className="mb-5 pb-3" key={feature.title}>
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  backgroundColor: '#0a1118', // Initial dark shade of blue
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3891ea'; // Light blue on hover
                  e.currentTarget.style.color = '#0a1118'; // Black text on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a1118'; // Dark shade of blue on leave
                  e.currentTarget.style.color = '#ffffff'; // White text on leave
                }}
              >
                <i className={`bi ${feature.icon} text-info fs-2`} />
                <CardTitle tag="h4" className="my-3">
                  {feature.title}
                </CardTitle>
                <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default About;
