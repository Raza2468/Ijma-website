import Header from '../../components/Header/Header';
import { message, Spin } from 'antd';
import map from "../../assests/map.PNG";
import React, { useRef, useState, useEffect } from "react";
import './ContactUS.css'

export default function ContactUS() {


  const [loading, setloading] = useState(true);
  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

  return (
    <div>
      <Header />


      <br />
      <br />
      {/* <br /> */}
      <div class="hero-content" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>
      <br />
      {/* <br />
      <br /> */}

      <div id="CareersForm" class="Careers" >
        <div class="container" >
          <div class="row" >
            <div class="col-lg-6">
              <h3 style={{ color: "#11366B", fontSize: "40px" }}>Let’s work together</h3>
              <p style={{ fontSize: "20px" }}>Thank you for being so awesome and thinking about us.</p>

              <div class="mb-3n">
                <h3 style={{ color: "#11366B", fontSize: "40px" }}>Send Us an Email</h3>
                <p><a href="mailto:info@tecstik.com" class="text-black" style={{ fontSize: "20px" }}>info@tecstik.com</a> </p>

              </div>
            </div>

            {/* <div class="col-lg-3 col-md-6" style={{ backgroundColor: "#ECECEC" }}>
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p><a href="mailto:info@tecstik.com" class="text-black">info@tecstik.com</a> </p>

              </div>
            </div> */}

            {/* <div class="col-lg-3 col-md-6" style={{ backgroundColor: "#ECECEC" }}>
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p> +92-21 32442392-93</p>
              </div>
            </div> */}
          </div>

          <div class="row">

            <div class="col-lg-6 ">
              <img
                title="myFrame"
                src={map}

                id="locationMap"
                // height="200"
                class="mb-4 mb-lg-0"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
              />
              <br />
              <br />
              <button type="button" class="btn btn-primary" id="googleMapbtn" onClick={maplink}>Open in Google Maps</button>
            </div>


            <div class="col-lg-6" style={{ backgroundColor: "#ECECEC" }}>
              <br />
              <br />
              <br />
              <form
                // action="forms/Careers.php"
                // method="post"
                // onSubmit={SndEmail}
                role="form"
                class="email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      style={{ margin: 10, padding: 10, color: "white" }}
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    // ref={firstname}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      style={{ margin: 10, padding: 10, color: "white" }}
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    // ref={firstEmail}
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    // ref={firstSubject}
                    style={{ margin: 10, padding: 10, color: "white" }}
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    style={{ margin: 10, padding: 10, color: "white" }}
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  // ref={firstMessage}
                  ></textarea>
                </div>
                {/* <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div class="text-center">
                  <button type="submit" style={{ backgroundColor: "#11366B", margin: 10, padding: 10, color: "white", borderRadius: 20 }} disabled>Send Message</button>
                  {/* {loading ? <button type="submit" class="y">Send Message</button> : <Spin size="large" />} */}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
