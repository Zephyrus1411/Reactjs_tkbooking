import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import cookie from "react-cookies";


function Header() {
  const [categories, setCategories] = useState([])
  const [kw, setKw] = useState()
  const nav = useNavigate()
  const [user, dispatch] = useContext(UserContext)

  // let cookie = cookie.load("user")
  const search = (event) => {
    event.preventDefault();

    nav(`/?kw=${kw}`);
  };

  const logout = (evt) => {
    evt.preventDefault();
    dispatch({ type: "logout" });
  };

  let btn = (
    <Link to="/login" className="nav-link">
      Đăng Nhập
    </Link>
  );
  if (user != null)
    btn = (
      <>
        <Link to="/" className="nav-link" style={{ color: "#FFF" }}>
          {user.username}
        </Link>
        <a href="/signup" onClick={logout} className="nav-link" style={{ color: "#FFF" }}>
          Đăng xuất
        </a>
      </>
    );


  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "#96CDCD" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "#000", fontWeight: "bold" }}
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
          <Nav className="nav-item me-auto">
            <Link to="/" className="nav-link Nav-Hover" style={{ color: "#000" }}>Trang chủ</Link>
          </Nav>
          <Nav className="nav-item me-auto" >
            <Link to="/routes" className="nav-link Nav-Hover" style={{ color: "#000" }}>Tuyến Đường</Link>
          </Nav>
          <Nav className="nav-item me-auto">
            <Link to="/" className="nav-link Nav-Hover" style={{ color: "#000" }}> Tin Tức</Link>
          </Nav>
          <Nav  className="nav-item me-auto">
            <Link to="/" className="nav-link Nav-Hover" style={{ color: "#000" }}>Tuyển Dụng</Link>
          </Nav>
          <Nav className="nav-item me-auto">
            <Link to="/" className="nav-link Nav-Hover" style={{ color: "#000" }}>Liên Hệ</Link>
          </Nav>
          <Nav  className="nav-item me-auto">
            <Link to="/aboutus" className="nav-link Nav-Hover" style={{ color: "#000" }}>Về Chúng Tôi</Link>
          </Nav>
          <Button
            style={{
              backgroundColor: "#000",
              color: "#FFF",
              border: "none",
            }}
          >
            {btn}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
