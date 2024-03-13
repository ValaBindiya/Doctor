import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Departments(props) {

    const departmentOption = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }

    return (

        <div>
            {/* Banner Area Starts */}
            <section className="banner-area other-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Departments</h1>
                            <NavLink to='/'>Home</NavLink> <span>|</span> <NavLink to='/Departments'>Departments</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Area End */}
            {/* Feature Area Starts */}
            <section className="feature-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature text-center item-padding">
                                <img src="assets/images/feature1.png" alt />
                                <h3>advance technology</h3>
                                <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature text-center item-padding mt-4 mt-md-0">
                                <img src="assets/images/feature2.png" alt />
                                <h3>comfortable place</h3>
                                <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                                <img src="assets/images/feature3.png" alt />
                                <h3>quality equipment</h3>
                                <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                                <img src="assets/images/feature4.png" alt />
                                <h3>friendly staff</h3>
                                <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature Area End */}
            {/* Department Area Starts */}
            <section className="department-area section-padding4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-top text-center">
                                <h2>Popular department</h2>
                                <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <OwlCarousel {...departmentOption} className="department-slider owl-carousel">
                                <div className="single-slide">
                                    <div className="slide-img">
                                        <img src="assets/images/department1.jpg" alt className="img-fluid" />
                                        <div className="hover-state">
                                            <a href="#"><i className="fa fa-stethoscope" /></a>
                                        </div>
                                    </div>
                                    <div className="single-department item-padding text-center">
                                        <h3>cardiac clinic</h3>
                                        <p>Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon</p>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-img">
                                        <img src="assets/images/department2.jpg" alt className="img-fluid" />
                                        <div className="hover-state">
                                            <a href="departments.html"><i className="fa fa-stethoscope" /></a>
                                        </div>
                                    </div>
                                    <div className="single-department item-padding text-center">
                                        <h3>plastic surgery</h3>
                                        <p>Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon</p>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-img">
                                        <img src="assets/images/department3.jpg" alt className="img-fluid" />
                                        <div className="hover-state">
                                            <a href="departments.html"><i className="fa fa-stethoscope" /></a>
                                        </div>
                                    </div>
                                    <div className="single-department item-padding text-center">
                                        <h3>dental clinic</h3>
                                        <p>Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon</p>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-img">
                                        <img src="assets/images/department1.jpg" alt className="img-fluid" />
                                        <div className="hover-state">
                                            <a href="departments.html"><i className="fa fa-stethoscope" /></a>
                                        </div>
                                    </div>
                                    <div className="single-department item-padding text-center">
                                        <h3>cardiac clinic</h3>
                                        <p>Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* Department Area Starts */}
            {/* Hotline Area Starts */}
            <section className="hotline-area text-center section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Emergency hotline</h2>
                            <span>(+01) – 256 567 550</span>
                            <p className="pt-3">We provide 24/7 customer support. Please feel free to contact us <br />for emergency case.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hotline Area End */}
        </div>

    );
}

export default Departments;