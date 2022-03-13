import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fitsonrotation from "../../images/fitsonrotation.jpg";
import "./FitsOnRotation.css";

export default function FitsOnRotation() {
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
          FITS ON ROTATION
        </div>
      </div>
      <Row className="fits-on-rotation-row">
        <Col className="fit-on-rotation-coll">
          <img src={fitsonrotation} style={{ width: "300px" }} />
        </Col>

        <Col className="fit-on-rotation-coll">
          {/* <Row> */}
          <img
            src={fitsonrotation}
            style={{ width: "300px" }}
            //   style={{ width: "100%" }}
          />
          {/* </Row> */}
        </Col>

        <Col className="fit-on-rotation-coll">
          {/* <Row> */}
          <img
            src={fitsonrotation}
            style={{ width: "300px" }}
            //   style={{ width: "100%" }}
          />
          {/* </Row> */}
        </Col>

        <Col className="fit-on-rotation-coll">
          {/* <Row> */}
          <img
            src={fitsonrotation}
            style={{ width: "300px" }}
            //   style={{ width: "100%" }}
          />
          {/* </Row> */}
        </Col>

        <Col className="fit-on-rotation-coll">
          {/* <Row> */}
          <img
            src={fitsonrotation}
            style={{ width: "300px" }}
            //   style={{ width: "100%" }}
          />
          {/* </Row> */}
        </Col>

        <Col className="fit-on-rotation-coll">
          {/* <Row> */}
          <img
            src={fitsonrotation}
            style={{ width: "300px" }}
            //   style={{ width: "100%" }}
          />
          {/* </Row> */}
        </Col>
      </Row>
    </Container>
  );
}
