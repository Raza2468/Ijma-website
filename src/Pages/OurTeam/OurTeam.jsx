import Header from '../../components/Header/Header';
import React, { useState } from "react";
import smartphone from '../../assests/smartphone.png'
import Imag2 from '../../assests/Imag2.png'
import { Slide, Zoom } from 'react-slideshow-image';


export default function OurTeam() {
    return (
        <div>
            <Header />
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                    <div class="row justify-content-between gy-5">
                        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>OurTeam</p>
                            <h4 data-aos="fade-up" style={{ color: "black" }}>Led by the professionals listed above, TecStik and The IJMA Platform is primarily operated by professionals who have prominent reputations across The Islamic Banking Sprectrum.</h4>
                            <br />
                            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Mr. Khalil A. Hasan - Chairman</p>
                            <h4 data-aos="fade-up" style={{ color: "black" }}>Mr. Khalil A. Hasan has over 57 years of experiencein Banking and Finance with local and multinational institutions in diverse roles including but not limited to:</h4>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                            <img src="https://i.ibb.co/3mFDHHJ/laptop-01.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                    {/* <br />
          <br /> */}
                </div>
            </section>
        </div>
    )
}
