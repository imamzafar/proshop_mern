import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "./EmailFooter.css";

export default function EmailFooter() {
  return (
    <div style={{ backgroundColor: "#f5f5f5", marginTop: "30px" }}>
      <Container className="emailFooter">
        <Row className="emailFooterTitle" style={{ textAlign: "center" }}>
          SIGN UP TO OUR VIP LIST TO GET ALL OUR EXCLUSIVE OFFERS BEFORE ANYONE
          ELSE!
        </Row>
        <Row className="emailFooterText">
          Subscribe to get early access to drops, exclusive offers and
          promotions.
        </Row>

        <Row className="emailFooterSignUp">
          <Form
            // onSubmit={submitHandler}
            inline
            style={{ display: "flex", width: "auto" }}
          >
            <Form.Control
              type="text"
              name="q"
              // onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter your email address"
              className="mr-sm-2 ml-sm-5"
            ></Form.Control>
            <Button
              type="submit"
              variant="outline-success"
              className="p-2"
              style={{
                marginLeft: "2rem",
                borderColor: "#ffd700",
                color: "#ffd700",
              }}
            >
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
