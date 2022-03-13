import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import company_1 from "../../images/company_1.jpg";
import company_2 from "../../images/company_2.jpg";
import company_3 from "../../images/company_3.jpg";
import company_4 from "../../images/company_4.jpg";
import "./BrandBanner.css";

export default function BrandBanner() {
  return (
    <>
      {/* new */}
      <div style={{ backgroundColor: "#e8e7e7", marginTop: "40px",paddingBottom:'70px' }}>
        <Container>
          <Row className="BrandBannerTitle" style={{ textAlign: "center" }}>
            <div
              className="BrandBannerTitle"
              style={{
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "50px",
                fontSize: "25px",
                marginBottom: "35px",
                color: "black",
                paddingTop: "",
              }}
            >
              SHOP BY BRAND
            </div>
          </Row>
          <Row>
            <Col className='BrandbannerCol'>
              <img src={company_1} style={{ width: "250px" }} />
            </Col>
            <Col className='BrandbannerCol'>
              <img src={company_1} style={{ width: "250px" }} />
            </Col>
            <Col className='BrandbannerCol'>
              <img src={company_1} style={{ width: "250px" }} />
            </Col>
            <Col className='BrandbannerCol'>
              <img src={company_1} style={{ width: "250px" }} />
            </Col>
          </Row>
        </Container>

      </div>
        <Container>
          <Row style={{ justifyContent: "center", marginTop:'-30px'}}>
            {" "}
            <div style={{ width: "inherit" }}>
              <Button
                style={{
                  padding: "2rem",
                  paddingRight: "4rem",
                  paddingLeft: "4rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  borderRadius: "50px",
                }}
              >
                SHOP BY BRANDS
              </Button>
            </div>
          </Row>
        </Container>
    </>
  );
}
