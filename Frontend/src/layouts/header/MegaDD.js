// MegaDD.js

import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

const featureData = [
  {
    id: 1,
    color: "primary",
    icon: "bell",
    heading: "Quantum Notifications",
    subtext: "Stay ahead with real-time quantum notifications to keep your business constantly updated.",
  },
  {
    id: 2,
    color: "success",
    icon: "link-45deg",
    heading: "Quantum Integrations",
    subtext: 'Leverage quantum integrations to seamlessly connect and enhance your business processes.',
  },
  {
    id: 3,
    color: "danger",
    icon: "graph-up",
    heading: "Quantum Analytics",
    subtext: "Make quantum leaps in decision-making by analyzing your business data with advanced quantum analytics.",
  },
  {
    id: 4,
    color: "info",
    icon: "shield-check",
    heading: "Quantum Security",
    subtext: "Ensure quantum-level security for your business with encrypted and secure information protocols.",
  },
  {
    id: 5,
    color: "success",
    icon: "link-45deg",
    heading: "Quantum Collaboration",
    subtext: 'Collaborate seamlessly with quantum-powered integrations for enhanced services and workflows.',
  },
  {
    id: 6,
    color: "danger",
    icon: "graph-up",
    heading: "Quantum Decision Insights",
    subtext: 'Enhance your business decisions with quantum-powered analytics for deeper insights and informed choices.',
  }
];

const MegaDD = () => {
  return (
    <>
      <Row>
        <Col lg="20">
          <CardTitle tag="h4">Business</CardTitle>
          <Row className="mt-4">
            {featureData.map((fdata) => (
              <Col lg="4" key={fdata.id}>
                <ListGroup flush>
                  <ListGroupItem>
                    <Button className={`border bg-transparent text-${fdata.color}`}>
                      <i className={`fs-3 bi bi-${fdata.icon}`}></i>
                    </Button>
                    <div className="ms-3">
                      <ListGroupItemHeading>{fdata.heading}</ListGroupItemHeading>
                      <ListGroupItemText className="text-muted mb-0">
                        {fdata.subtext}
                      </ListGroupItemText>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MegaDD;
