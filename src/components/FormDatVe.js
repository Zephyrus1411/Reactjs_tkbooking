import React, { useState } from "react";
import { Form, Button, Row, Col, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaSearch, FaBus } from "react-icons/fa";
import Api, { endpoints } from '../configs/Api'


const FormDatVe = () => {
  const [route, setRoute] = useState([])
  const [nameBegin, setNameBegin] = useState([])
  const [nameEnd, setNameEnd] = useState([])

  return (
    <>
      <div
        style={{
          margin: "10px auto",
          width: "80%",
          borderRadius: "16px",
          boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
          backgroundColor: "#96CDCD",
          padding: "24px",
        }}
      >
        <Form>
          <Form.Label
            htmlFor="basic-url"
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginRight: "24px",
            }}
          >
            ĐẶT VÉ XE
          </Form.Label>
          <p>Vé xe một chiều</p>
          <br />
          <Form
            style={{
              display: "flex",
              width: "100%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <Form.Group style={{ marginRight: "24px",  width:"35%" }}>
              <Form.Label>Chọn điểm đi</Form.Label> <br />
              <Form.Select aria-label="Default select example" style={{width:"100%",height:"40px", padding: "10px", borderRadius: "10px", border: "none"}}>
              <option>Chọn điểm đi: </option>
            </Form.Select>
            </Form.Group>
            <Form.Group style={{ marginRight: "24px",  width:"35%" }}>
              <Form.Label>Chọn điểm đến</Form.Label> <br />
              <Form.Select aria-label="Default select example" style={{width:"100%", height:"40px", padding: "10px", borderRadius: "10px", border: "none"}}>
              <option>Chọn điểm đến: </option>
            </Form.Select>
            </Form.Group>
            <Form.Group style={{ marginRight: "24px", width:"20%" }}>
              <Form.Label>Ngày khởi hành</Form.Label>
              <Form.Control type="date" style={{width:"100%", height:"40px", padding: "10px", borderRadius: "10px"}}/>
            </Form.Group>

            <Button type="submit" style={{ backgroundColor: '#000', color: '#FFFFFF', border: 'none',  width:"10%", height: "40px", marginTop: "32px"}}>
              {" "}
              <FaSearch />{" "}
            </Button>
          </Form>
        </Form>
      </div>
    </>
  );
}
export default FormDatVe;
