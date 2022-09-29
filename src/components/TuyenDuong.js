import React, { useEffect, useState, useContext } from "react";
import {
  Breadcrumb,
  FormControl,
  InputGroup,
  Carousel,
  Form,
  Row,
  Col, Table, Button, Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import Api, { endpoints } from "../configs/Api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const TuyenDuong = () => {
  const [routes, setRoutes] = useState([])
  const [kwState, setKwState] = useState('')
  const [kw2State, setKw2State] = useState('')
  const [sort, setSort] = useState([])
  const nav = useNavigate()
  const [user, dispatch] = useContext(UserContext)

  const goToBooking = (id) => {
    nav(`/ticketbookings/${id}`)
  }

  useEffect(() => {
    const loadRoutes = async () => {
      const res = await Api.get(`${endpoints['routes']}?kw=${kwState}&kw2=${kw2State}`)
      setRoutes(res.data)
      console.info(res.data)
    }
    loadRoutes()
  }, [kwState, kw2State])



  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Tuyến Đường</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel
        style={{
          margin: "auto",
          width: "80%",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="First slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Second slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Third slide"
            height="300px"
          />
        </Carousel.Item>
      </Carousel>

      <Form
        style={{
          margin: "10px auto",
          width: "80%",
        }}
      >
        <Row>
          <Col>
            <InputGroup>
              <FormControl value={kwState} onChange={(event) => setKwState(event.target.value)}
                placeholder="Tìm điểm đi..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                {" "}
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl value={kw2State} onChange={(event) => setKw2State(event.target.value)}
                placeholder="Tìm điểm đến..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                {" "}
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Form>

      <div style={{
        margin: "20px auto",
        width: "80%",
        textAlign: "center",
      }}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th colSpan={3}>Tuyến đường</th>
              <th >Thời gian bắt đầu</th>
              <th>loại vé</th>
              <th>Giá vé</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {routes.map(c => {
              return <>
                <tr>
                  <td>{c.begining}</td>
                  <td><RiArrowLeftRightLine /></td>
                  <td>{c.destination}</td>
                  <td>{c.date_bg}</td>
                  <td>{c.category.type}</td>
                  <td>{c.cost}</td>
                  {user != null ?
                    <td><Button onClick={() => goToBooking(c.id)} variant="dark">Đặt vé</Button></td>
                    : <td></td>
                  }
                </tr>
              </>


            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default TuyenDuong;
