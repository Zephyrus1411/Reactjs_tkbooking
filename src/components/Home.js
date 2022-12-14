import React from "react";
import { Carousel, Button, Row, Col, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaSearch, FaBus } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { GiCardPlay } from "react-icons/gi";
import { BiCycling } from "react-icons/bi";
import { Link } from "react-router-dom";
import FormDatVe from './FormDatVe';


function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="First slide"
            height="300px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Second slide"
            height="300px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Third slide"
            height="300px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <FormDatVe />
      
      <div
        style={{
          margin: "10px auto",
          width: "100vw",
          padding: "24px",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Row>
          <Col>
            <div className="md-3">
              <div style={{ fontSize: "70px" }}>
                {" "}
                <MdOutlineScreenSearchDesktop />{" "}
              </div>
              <div>
                <h3>T??M KI???M</h3>
                <span>T??m ki???m & Ch???n chuy???n</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="md-3">
              <div style={{ fontSize: "70px" }}>
                {" "}
                <GiCardPlay />{" "}
              </div>
              <div>
                <h3>?????T</h3>
                <span>??i???n th??ng tin & Thanh to??n</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="md-3">
              <div style={{ fontSize: "70px" }}>
                {" "}
                <FaBus />{" "}
              </div>
              <div>
                <h2>??I</h2>
                <p>Xu???t tr??nh th??ng tin V?? tr?????c th???i ??i???m l??n xe</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          margin: "10px auto",
          width: "80%",
          borderRadius: "16px",
          boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
          backgroundColor: "#FFF",
          padding: "24px",
          justifyContent: "space-evenly",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>
          {" "}
          <BiCycling /> C??C TUY???N ???????NG PH??? BI???N
        </h4>
        <Row>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Th??nh ph??? H??? Ch?? Minh ?????n ???? L???t
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </div>

      <div
        style={{
          margin: "10px auto",
          width: "80%",
          borderRadius: "16px",
          boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
          padding: "24px",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>
          {" "}
          <BiCycling /> TIN T???C C???P NH???T V?? TH??NG TIN C??C CHUY???N XE
        </h4>
        <Row style={{margin: "20px 0"}}>
          <Col>
            <Link to="/">
              <Card>
                <Card.Img variant="top" src="../img/1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/">
            <Card>
                <Card.Img variant="top" src="../img/1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/">
            <Card>
                <Card.Img variant="top" src="../img/1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/">
            <Card>
                <Card.Img variant="top" src="../img/1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <div style={{width: "100%", textAlign: "center"}}>
          <Button style={{backgroundColor: '#000', color: '#FFFFFF', border: 'none', fontSize: "12px"}}>Xem th??m</Button>
        </div>
      </div>
    </>
  );
}
export default Home;
