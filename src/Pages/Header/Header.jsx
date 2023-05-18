import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import logo from "../Images/logo2.png";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navItemColor, setnavItemColor] = useState("#fff");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
    window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <header>
        <div
          className="Navbar"
          id="nav"
          style={{
            backgroundColor: navColor,
            color: navItemColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <span className="nav-logo" id="nav-logo">

            <Link to="/#">
              <img src={logo} class="mt-4" height={115} width={90} />
            </Link>
          </span>
          <span id="logotext"><Link to="/" id="textColor">TecStik</Link></span>

          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/#">Home</Link>

            <Link to="/about/#about">Meet TecStik</Link>
            <div class="dropdown">
              <div id="services" className="nav-items">
                Our Expertise
                <img
                  src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg"
                  height={20}
                />
              </div>

              <div class="dropdown-content">
                <Row>
                  <Col span={12}>
                    {" "}
                    <Link to="/blockchain/#blockchain" >
                      Blockchain Development
                    </Link>
                  </Col>

                  <Col span={12}>
                    <Link to="/mobileApp/#mobileApp"> Mobile App Development </Link>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <Link to="/WebAndMobile/#WebAndMobile">Web Development</Link>
                  </Col>
                  {/* <Col span={12}>
                    {" "}
                    <Link to="/GraphicDesigning">Graphic Designing</Link>
                  </Col> */}
                  <Col span={12}>
                    {" "}
                    <Link to="/cloud/#cloud">Cloud Computing</Link>
                  </Col>
                </Row>

                <Row>
                  {/* <Col span={12}>
                    <Link to="/ContentWriting">Content Writing</Link>
                  </Col> */}
                  {/* <Col span={12}>
                    {" "}
                    <Link to="/DigitalMarketing"> Digital Marketing</Link>
                  </Col> */}
                </Row>
              </div>
            </div>

          
            <HashLink to="/product/#product">Products</HashLink>
            <HashLink to="/portfolio/#portfolio">Portfolio</HashLink>

            <HashLink to="/careers/#careers">Careers</HashLink>
            <HashLink to="/blog/#blog">Blog</HashLink>
            <HashLink to="/contact/#contact">Contact</HashLink>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
