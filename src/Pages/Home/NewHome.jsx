import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './NewHome.css'

import BlockcIcon from "../Images/BlockcIcon.png";
import reactlogo from "../Images/reactlogo.png";
import bordaLabtop from "../Images/bordaLabtop.png";

import HomeCard from '../HomeCard/HomeCard'

const NewHome = () => {


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
                            <p data-aos="fade-up">TecStik Technologies
                            </p>
                            <h2 data-aos="fade-up" data-aos-delay="400"> Fintech Propelling Growth</h2>
                            <div data-aos="fade-up" data-aos-delay="800">
                                <Link to="/about" class="btn-get-started">Meet TecStik</Link>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src={bordaLabtop} id="labtopImage"
                                class="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            <section class="sponsor">
                <div class="column">
                    <div class="container-fluid">
                        <div class="row justify-content-center"
                            id="cardlogo"
                        >
                            {/* <div class="col-6 col-md-2 col-sm-6">
                                <img src="https://www.blackstoneeit.com/assets/image/vector/partner_amazon.svg" alt="" data-aos="zoom-in" data-aos-delay="250" data-aos-anchor=".intro" class="aos-init aos-animate" />
                            </div> */}
                            <div class="col-6 col-md-2 col-sm-6">
                                <img src={reactlogo} alt="" data-aos="zoom-in" data-aos-delay="750" data-aos-anchor=".intro" class="aos-init aos-animate" />
                            </div>
                            <div class="col-6 col-md-2 col-sm-6">
                                <img src={BlockcIcon} alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-anchor=".intro" class="aos-init aos-animate" />
                            </div>
                            <div class="col-6 col-md-2 col-sm-6">
                                <img src="https://cncf-branding.netlify.app/img/projects/kubernetes/icon/black/kubernetes-icon-black.png" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-anchor=".intro" class="aos-init aos-animate" />
                            </div>
                            {/* <!--
                <div class="col-6 col-md-2 col-sm-6 d-none d-md-block">
                    <img src="~/assets/image/vector/partner_marrot.svg" alt="" data-aos="zoom-in"  data-aos-delay="1000">
                </div>--> */}
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
            <section id="ser" class="ser">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h3 class="text-center">Technologies we use:</h3>
                        <p></p>
                    </div>

                    {/* <div class="row">
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

                    </div> */}

                </div>
            </section>
            <br />
            <br />
            <HomeCard />
            <br />
            <br />
            <br />
            <section id="counts" class="counts">
                <div class="container">

                    <div class="row">
                        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                            <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features-3.png" alt=""
                                class="img-fluid" />
                        </div>

                        <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div class="content d-flex flex-column justify-content-center">
                                <div class="row" id="countNum">
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="bi bi-emoji-smile"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="84" data-purecounter-duration="1" class="purecounter">56</span>
                                            <p><strong>Happy Clients</strong></p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="bi bi-journal-richtext"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter">56</span>
                                            <p><strong>Projects</strong></p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box ">
                                            <i class="bi bi-clock"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter">18</span>
                                            <p>
                                                <strong>Years of experience</strong></p>
                                        </div>
                                    </div>

                                    {/* <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="bi bi-award"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">15</span>
                                            <p><strong>Awards</strong> </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/* <!-- End .content--> */}
                        </div>
                    </div>

                </div>
            </section>
            <br />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NewHome