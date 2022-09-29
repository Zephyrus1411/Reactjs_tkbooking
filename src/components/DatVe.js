import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Nav,
  NavDropdown,
  Row,
  Col,
  Container, Form, Button, Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDotCircle, FaMapMarkerAlt, FaEllipsisV } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Api, { endpoints } from "../configs/Api";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { FaSearch, FaBus } from "react-icons/fa";

const DatVe = () => {
  const [seatsState, setSeatsState] = useState([])
  const [nameState, setNameState] = useState()
  const [phoneState, setPhoneState] = useState()
  const { routesID } = useParams()

  const [bus, setBus] = useState()
  const [seats, setSeats] = useState()

  const [routeDetail, setRouteDetail] = useState([])


  const booking = async () => {
    const resBooking = await Api.post(endpoints['ticketbooings'], {
      "cus_name": nameState,
      "numb_phone": phoneState,
      "buses": bus,
      "category": routeDetail.category.id,
      "seats": seats,
      "routes": routesID
    })
    alert("Dien thong tin thanh cong")
  }

  useEffect(() => {
    const loadSate = async () => {
      const resSeat = await Api.get(endpoints['seats'])
      const resRouteDetail = await Api.get(endpoints['routes_detail'](routesID))
      setSeatsState(resSeat.data)
      setRouteDetail(resRouteDetail.data)
      console.info(resSeat.data, resRouteDetail.data)
    }
    loadSate()

  }, [])

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Đặt vé</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{
        margin: "10px auto",
        width: "80%",
        borderRadius: "16px",
        boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
        padding: "24px",
      }}>
        <div
          style={{
            margin: "20px auto",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontWeight: "bold" }}>
              {routeDetail.begining} <RiArrowLeftRightLine /> {routeDetail.destination} 
            </h3>
            <p>Ngày khởi hành: {routeDetail.date_bg}</p>

            <p>Loai ve: {routeDetail.category && routeDetail.category.type}</p> 
          </div>
        </div>

        <Form.Select aria-label="Default select example" value={seats} onChange={e => setSeats(e.target.value)} style={{width:"200px", padding: "5px", borderRadius: "10px", margin: "24px 0"}}>
          <option>Chọn ghế :</option>
          {seatsState.map(c => {
            return <option value={c.id}>{c.seat_numb}</option>
          })}
        </Form.Select>
        <Form.Group style={{borderRadius: "10px", marginBottom: "24px"}}>
          <Form.Control type="text" placeholder="Nhập họ và tên" value={nameState} onChange={e => setNameState(e.target.value)} />
        </Form.Group>
        <Form.Group style={{borderRadius: "10px", marginBottom: "24px"}}>
          <Form.Control type="number" placeholder="Nhập số điện thoại" value={phoneState} onChange={e => setPhoneState(e.target.value)} />
        </Form.Group>

        <Button type="submit" style={{ backgroundColor: '#000', color: '#FFFFFF', border: 'none' }} onClick={() => booking()}>
          Thanh toán
        </Button>
      </div>

    </>
  );
}
export default DatVe;
