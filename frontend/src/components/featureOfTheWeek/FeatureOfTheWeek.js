import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./FeatureOfTheWeek.css";
import feature_1 from "../../images/feature_1.jpg";
import feature_2 from "../../images/feature_2.jpg";
import feature_3 from "../../images/feature_3.jpg";

export default function FeatureOfTheWeek() {
  return (
    <Container style={{ position: "relative", marginTop: "60px" }}>
      <div style={{ position: "relative" }}>
        <div
          className="featureOfTheWeekTitle"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
            fontSize: "25px",
          }}
        >
          FEATURE OF THE WEEK
        </div>
      </div>
      <Row>
        <Col className="feature-of-theweek-col">
          <Row>
            <img
              src={feature_1}
              //   style={{ width: "100%" }}
            />
          </Row>
          <Row className="feature-of-the-week-title">LOREM IPSUM: DOLOR</Row>
          <Row className="feature-of-the-week-content">
            Ut laoreet sollicitudin sem, et euismod odio consectetur varius.
            Fusce ac dignissim nunc, a feugiat felis. Integer ac mauris
            venenatis, tristique quam sed, placerat massa. Quisque neque diam,{" "}
          </Row>
          <Row className="feature-Button">
            <div style={{ width: "inherit" }}>
              <Button>SHOP NOW</Button>
            </div>
          </Row>
        </Col>
        <Col className="feature-of-theweek-col">
          <Row>
            <img
              src={feature_2}
              //   style={{ width: "100%" }}
            />
          </Row>
          <Row className="feature-of-the-week-title">LOREM HGWELT DOLOR</Row>
          <Row className="feature-of-the-week-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet varius efficitur. Sed id eros in velit pretium ullamcorper
            ac et nunc. Nullam leo tellus, interdum consequat malesuada ut.
          </Row>
          <Row className="feature-Button">
            <div style={{ width: "inherit" }}>
              <Button>SHOP NOW</Button>
            </div>
          </Row>
        </Col>
        <Col className="feature-of-theweek-col">
          <Row>
            <img
              src={feature_3}
              //   style={{ width: "100%" }}
            />
          </Row>
          <Row className="feature-of-the-week-title">LOREM IPSUM HELDTS</Row>
          <Row className="feature-of-the-week-content">
            Phasellus libero risus, vestibulum eget justo non, tristique mollis
            nisl. Fusce massa ligula, placerat et interdum vitae, pellentesque
            id ex. Integer{" "}
          </Row>
          <Row className="feature-Button">
            <div style={{ width: "inherit" }}>
              <Button>SHOP NOW</Button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
