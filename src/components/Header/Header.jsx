import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./Header.css";
// import "./about.css";
// import "./feature.css";
import { Link } from "react-router-dom";
import Logo from '../../assests/logo.png'
import smartphone from '../../assests/smartphone.png'
import Imag2 from '../../assests/Imag2.png'
import { Slide, Zoom } from 'react-slideshow-image';
import { Col, Row } from "antd";
import Button from 'react-bootstrap/Button';


export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',


  }
  const slideImages = [
    {
      url: 'https://i.ibb.co/3mFDHHJ/laptop-01.png',
      caption: 'Slide 1'
    },
    {
      url: 'https://i.ibb.co/3mFDHHJ/laptop-01.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://i.ibb.co/3mFDHHJ/laptop-01.png',
      caption: 'Slide 3'
    },
  ];

  const images = [
    'https://i.ibb.co/3mFDHHJ/laptop-01.png',
    'https://i.ibb.co/3mFDHHJ/laptop-01.png',
    'https://i.ibb.co/3mFDHHJ/laptop-01.png',
    'https://i.ibb.co/3mFDHHJ/laptop-01.png',
    // 'images/slide_6.jpg',
    // 'images/slide_7.jpg'
  ];
  return (
    <>
      {/* NAvbar */}

      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={Logo} alt="" id="logo" height={170} style={{ marginTop: "6%" }} />

            IJMA
            {/* <i className="fas fa-arrow-down"></i> */}
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Operator
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/joinIjma"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Why join IJMA?
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Our Platform
              </Link> */}
              <div class="dropdown">
                <div id="services">Our Platform <i className="fa fa-caret-down"></i></div>
                <div class="dropdown-Industries">
                  <ul>
                    <><Link to="/" >Our Accreditation</Link></>
                    <> <Link to="/">Our Story</Link></>
                    <> <Link to="/OurTeam">Our team</Link></>
                  </ul>

                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
                <Button variant="outline-primary" className="nav-links">Login</Button>
            </li>
            <li className="nav-item">
                <Button variant="outline-primary">Sign UP</Button>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {/* 2nd Nav */}

      <nav className="Twonavbar">
        <div className="Twonav-container">
          <h4 id="TwoNavText">Gateway to Islamic Banking</h4>
        </div>
      </nav>

      {/* Home */}



      {/* <section id="features" class="features">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <p>Our Platform</p>
            <h2>Our Platform</h2>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src={smartphone} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <p>As you can tell by the slideshow on The Monitor Above, IJMA enables the digitization of Islamic Banking with Transparency and Security. IJMA is a permissioned Blockchain network  of Islamic Financial Institutions (IFIs).</p>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p> provides more efficient transactional processes</p></h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p>addresses  the key issues of Legacy Systems and  Procedures</p></h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p>makes IFIs  increasingly competitive  for consumers.</p></h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p></p></h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p></p></h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fa fa-check"></i>
                    <h3><b>IJMA</b><p></p></h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <br />
      <br />
      <br />
    </>
  );
}
