import React from "react";
import {
  Navbar,
  Row,
  Col,
  Container,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineDoubleArrow, MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#96CDCD",
          margin: "auto",
          width: "100%",
        }}
      >
        <Container
          style={{
            padding: "24px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Row>
            <Col>
              <div
                className="logo-part"
                style={{ color: "#000", fontWeight: "bold" }}
              >
                <Navbar.Brand
                  href="#home"
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "32px",
                  }}
                >
                  <img
                    src="../img/logobus.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  ON BUS
                </Navbar.Brand>
                <p>TỔNG ĐÀI ĐẠT VÉ VÀ CSKH</p>
                <p>CÔNG TY CỔ PHẦN XE KHÁCH ONBUS</p>
              </div>
            </Col>
            <Col md="auto">
              <Nav className="flex-column">
                <Nav.Link href="#home" style={{ color: "#000" }}>
                  <MdOutlineDoubleArrow /> Tin tức
                </Nav.Link>
                <Nav.Link href="#home" style={{ color: "#000" }}>
                  <MdOutlineDoubleArrow /> Tuyển dụng
                </Nav.Link>
                <Nav.Link href="#home" style={{ color: "#000" }}>
                  <MdOutlineDoubleArrow /> Liên hệ
                </Nav.Link>
                <Nav.Link href="#home" style={{ color: "#000" }}>
                  <MdOutlineDoubleArrow /> Về chúng tôi
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs lg="3">
              <div>
                <h6 style={{ fontWeight: "bold" }}>KẾT NỐI VỚI CHÚNG TÔI</h6>
                <div className="social">
                  <Nav>
                    <Nav.Link href="#home" style={{ color: "#000" }}>
                      <img
                        src="../img/facebook_icon.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                    </Nav.Link>
                    <Nav.Link href="#home" style={{ color: "#000" }}>
                      <img
                        src="../img/Youtube_icon.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Onbus.com</a>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Footer;
