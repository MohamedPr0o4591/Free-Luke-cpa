import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import trustPilot from "../../Images/trustpilot.svg";

const Footer = () => {
  return (
    <footer
      className={
        localStorage.mode === "light"
          ? "footer text-light"
          : "footer-dark footer text-light"
      }
      style={
        !localStorage.terms
          ? { pointerEvents: "none", opacity: 0.4 }
          : { pointerEvents: "initial" }
      }
    >
      <Container fluid>
        <div className="logo-img">
          <label>
            <h3>
              <span className="text-danger fw-bold">F</span>ree{" "}
              <span className="text-danger fw-bold">L</span>uke
            </h3>
          </label>
        </div>

        <Row className="d-flex justify-content-between border-bottom pb-3">
          <Col xl="6" sm="12">
            &copy; 2023 MisterProgramming. All rights reversed.
          </Col>
          <Col xl="6" sm="12">
            <div className="trustPilot d-flex flex-column gap-3 w-100">
              <a
                href="https://www.trustpilot.com/"
                target="_blank"
                className="gap-3"
              >
                <strong>See our reviews on</strong>

                <img src={trustPilot} />
              </a>
            </div>
          </Col>
        </Row>

        <div className="socialMedia mt-2 d-flex align-items-center gap-3">
          <span>Follow us</span>

          <a href="" target="_blank">
            <i className="bx bxl-facebook" />
          </a>

          <a href="" target="_blank">
            <i className="bx bxl-instagram" />
          </a>

          <a href="" target="_blank">
            <i className="bx bxl-twitter" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
