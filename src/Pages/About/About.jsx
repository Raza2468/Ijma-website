import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer"
import Header from "../../components/Header/Header"
import './About.css'

// import BlockcIcon from "../../assests/Imag1.png";
// import reactlogo from "../../assests/Imag1.png";
import bordaLabtop from "../../assests/Imag1.png";

// import HomeCard from '../HomeCard/HomeCard'

const About = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get("tab") || "0";

    const changeTab = (tab) => {
        searchParams.set("tab", tab);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [searchParams]);

    return (



        <div id="NewHome">
            <Header />
            <section id="hero" class="d-flex align-items-center" style={{ marginBottom: "13%" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <p data-aos="fade-up" style={{ color: "#11366B" }}>About Operator
                            </p>
                            <br />
                            <h2 data-aos="fade-up" data-aos-delay="400">TecStik - The team behind IJMA - is committed to introducing Islamic Banking Products like Musharika, Ijara, and Salam to The IJMA Platform, subsequently. With TecStik’s highly seasoned Islamic Bankers and Financial Consultants working with Pacific Financial Services - IJMA’s parent company ,it consistently develops innovative fintech applications for both mobile and desktop platforms</h2>
                            {/* <div data-aos="fade-up" data-aos-delay="800">
                                <Link to="/about" class="btn-get-started">Meet TecStik</Link>
                            </div> */}
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src="https://i.ibb.co/3mFDHHJ/laptop-01.png" id="labtopImage"
                                class="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <div class="section-title">
                    <h2><span></span>Our Story.</h2>
                    <br />
                </div>
            </div>
            <div class="container">
                <table>
                    <tr>
                        <td id="thHeadeing">2002</td>
                        <td id="thHeadeingA">Pacific FInancial Services PVT. LTD. (PFSL) Incorporated - TecStik’s Parent Company</td>
                    </tr>
                    <tr>
                        <td id="thHeadeing">2002-2010</td>
                        <td id="thHeadeingA">PFSL provides Corporate Finance Advisory for global companies.</td>
                    </tr>
                    <tr>
                        <td id="thHeadeing">2010</td>
                        <td id="thHeadeingA">PFSL creates TecStik - a separate Fintech Arm to research, analyse and create solutions using Digital Finance.</td>
                    </tr>
                    <tr>
                        <td id="thHeadeing">2011-2017</td>
                        <td id="thHeadeingA">TecStik is commissioned to research, analyse and create solutions powered by Digital Finance.</td>
                    </tr>
                    <tr>
                        <td id="thHeadeing">2017-2020</td>
                        <td id="thHeadeingA">TecStik develops mobile and desktop applications catering to the expansive fintech market.</td>
                    </tr>
                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default About;

{/* <section id="ser" class="ser">
<div class="container">

    <div class="section-title" data-aos="fade-up">
        <h3 class="text-center">Technologies we use:</h3>
        <p></p>
    </div>


    <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <img src={blockchainIcon} alt="" srcset="" height={80} />
                <h4 class="title"><Link to="/blockchain"> Blockchain Development</Link></h4>
                <p class="description">With enhanced reliability, protection, clarity, and trackability, you take advantage of the approaching future.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <img src={codeIcon} alt="" srcset="" height={80} />
                <h4 class="title"><Link to="/WebAndMobile">MERN Stack </Link></h4>

                <p class="description">Impress visitors with high-powered functionality and elegant design.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <img src={graficdesigningIcon} alt="" srcset="" height={80} />
                <h4 class="title">  <Link to="/mobileApp">Mobile App Development</Link></h4>
                <p class="description">Interact with users of your fintech applications on the go.</p>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <img src={contentIcon} alt="" srcset="" height={80} />
                <h4 class="title"> <Link to="/DigitalMarketing"> Digital Marketing</Link></h4>
                <p class="description">Digital channels have risen. Let your business marketing benefit from the work of Fintech Digital Marketing experts.</p>
            </div>
        </div>

    </div>

</div>
</section> */}
