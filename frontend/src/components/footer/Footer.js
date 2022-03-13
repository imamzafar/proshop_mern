import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./Footer.css";
import latestandgreat1 from "../../images/latestandgreat1.jpg";
import latestandgreat2 from "../../images/latestandgreat2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facebo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col>
            <img src={Logo} style={{ width: "50px" }} />
          </Col>
          <Col className="footerColumn">
            <Row className="footerColumnTitle">SHOP</Row>
            <Row>Men</Row>
            <Row>Women</Row>
            <Row>Sport</Row>
            <Row>Looks</Row>
            <Row>Brands</Row>
          </Col>

          <Col className="footerColumn">
            <Row className="footerColumnTitle">STORIES</Row>
            <Row>Men</Row>
            <Row>Women</Row>
            <Row>Sport</Row>
            <Row>Looks</Row>
            <Row>Looks</Row>
            <Row>Looks</Row>
            <Row>Looks</Row>
            <Row>Looks</Row>
            <Row>Brands</Row>
          </Col>

          <Col className="footerColumn">
            <Row className="footerColumnTitle">ABOUT</Row>
            <Row>Men</Row>
            <Row>Women</Row>
            <Row>Sport</Row>
            <Row>Looks</Row>
            <Row>Brands</Row>
          </Col>

          <Col className="footerColumn">
            <Row className="footerColumnTitle">HELP</Row>
            <Row>Men</Row>
            <Row>Women</Row>
            <Row>Sport</Row>
            <Row>Looks</Row>
            <Row>Brands</Row>
            <Row>Brands</Row>
            <Row>Brands</Row>
            <Row>Brands</Row>
          </Col>
          <Col md={4}>
            <Row
              style={{ justifyContent: "space-between", marginBottom: "1rem" }}
            >
              <Col style={{ fontWeight: "700" }}>
                <p>Latest & Greatest</p>
              </Col>
              <Col
                style={{ fontSize: "12px", color: "grey", textAlign: "end" }}
              >
                View All>>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={latestandgreat1} width="150px" />
                <div>SEICHI YOROI</div>
              </Col>
              <Col>
                <img src={latestandgreat2} width="150px" />
                <div>NIKE AIR SEICHI YOROI</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div style={{ borderTop: "1px solid #e4e1e1" }}>
        <Container>
          <Row md="auto" style={{ fontSize: "12px" }}>
            <Col className="py-3" style={{ fontSize: "12px" }}>
              {" "}
              &copy; CHESSKING
            </Col>
            <Col className="py-3">Term | Privacy</Col>
            <Col className="text-center py-3">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>{" "}
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>{" "}
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </Col>
            <Col className="text-center py-3">Copyright &copy; CHESSKING</Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
