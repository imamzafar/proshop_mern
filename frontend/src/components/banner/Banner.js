import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

export default function Banner() {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "80vw",
          height: "200px",
          backgroundColor: "black",
          marginTop: "5rem",
        }}
        className="banner-top"
      >
        <img
          className="banner-top-img"
          src="https://assets-2.placeit.net/smart_templates/1515ef3eb8ded7f7d8e96b4fecc69c38/assets/33e413340c3a69c9869fcf9c978ad1e8.png"
          alt="Geeks Image"
          width="100%"
          height="100%"
        />
      </div>
    </Container>
  );
}
