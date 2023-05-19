import "./Home.css";
import React, { useState } from "react";
import smartphone from '../../assests/smartphone.png'
import Imag2 from '../../assests/Imag2.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";


function Home() {


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
      <div>
        <Header />


        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div
                class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                {/* <h2 data-aos="fade-up" style={{ color: "#11366B" }}>Embrace IJMA for Shariah-Compliant Banking</h2> */}
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Embrace IJMA for Shariah-Compliant Banking</p>
                {/* <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch
                    Video</span></a>
              </div> */}
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <Slide>
                  <Zoom scale={0.4}>
                    {
                      images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                    }
                  </Zoom>
                </Slide>
                {/* <Slide>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
                {/* <img src="https://i.ibb.co/3mFDHHJ/laptop-01.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" /> */}
              </div>
            </div>
            {/* <br />
          <br /> */}
          </div>
        </section>

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={Imag2} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <h2>Unlock the Potential of Blockchain to Transform Islamic Banking.</h2>
                  <br />
                  <h3>Join IJMA as an IBFI</h3>
                  <br />
                  <ul>
                    <li>Are you tired of the high costs, risks, and inefficiencies associated with traditional Islamic Banking and Financial Services Operations? Look no further! IJMA offers a groundbreaking solution powered by blockchain technology, poised to disrupt how IBFIs conduct transactions and contracts. Addressing Criticisms and Bringing True Sharia Compliance.</li>
                    <br />
                    <li> We understand the concerns surrounding Islamic Banks' operations, which often closely resemble conventional banking systems controlled by the State Bank of Pakistan. IJMA addresses these major criticisms, providing a viable alternative that aligns with the true spirit of Sharia law.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>


        <div class="container">
          <div class="section-title">
            <h2><span></span>Overcome the Challenges of Murabaha with IJMA</h2>
            <br />
            <p>Say goodbye to the issues of incomplete ownership transfer and cumbersome manual documentation. With IJMA, the transfer of risk and ownership is genuine, ensuring compliance with Sharia principles. No more delays caused by back-and-forths or pre-signed post-dated documents.Rest assured that our solution meets Sharia requirements, allowing you to conduct Murabaha transactionsseamlessly. Enhanced Efficiency and Reduced Costs.
              <br />
              <br />
              With IJMA, you'll enjoy streamlined processes, reduced monitoring requirements, and associated costs. Say goodbye to excessive regulatory reporting and filing burdens, as our platform simplifies these tasks for you</p>
          </div>
        </div>

        <div class="container">
          <div class="section-title">
            <h2><span></span>Empowering Islamic Banking with Distinctive Features</h2>
            <br />
            <p>Stand out from conventional banks and strengthen your Islamic Banking window with IJMA. Our solution offers enhanced regulatory compliance, real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as blockchain technology eliminates the risks of forgery and ensures the integrity of your transactions Paving the Way to Digitalized Islamic Banking.            <br />
            </p>
          </div>
        </div>

        <div class="container">
          <div class="section-title">
            <h2><span></span>IJMA is aligned with the <br /> vision of digitalized Islamic Banking.</h2>
            <br />
            <p>By leveraging our platform, you can complement the country's digital transformation efforts. Embrace the possibility of integrating with the Raast network and stay ahead of the curve.
            </p>
          </div>
        </div>

        {/*  */}

        <section id="about" class="about">

          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={smartphone} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <h2>Experience the Future of Islamic Banking Today</h2>
                  <br />
                  {/* <h3>Join IJMA as an IBFI</h3> */}
                  <br />
                  <ul>
                    <li>Join us on this groundbreaking journey as we reshape the Islamic Banking landscape. Embrace innovation, improve efficiency, and ensure true Sharia compliance with IJMA. Contact us now to learn more about our transformative solution and how it can benefit your organization. Together, let's revolutionize Islamic Banking and Financial Services.</li>
                    {/* <br /> */}
                    {/* <li> We understand the concerns surrounding Islamic Banks' operations, which often closely resemble conventional banking systems controlled by the State Bank of Pakistan. IJMA addresses these major criticisms, providing a viable alternative that aligns with the true spirit of Sharia law.</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Home;
