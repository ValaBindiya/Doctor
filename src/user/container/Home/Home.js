import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home(props) {

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
            <section className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h4>Caring for better life</h4>
                            <h1>Leading the way in medical excellence</h1>
                            <p>Earth greater grass for good. Place for divide evening yielding them that. Creeping beginning over gathered brought.</p>
                            <a href className="template-btn mt-3">take appointment</a>
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
            {/* Welcome Area Starts */}
            <section className="welcome-area section-padding3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="welcome-img">
                                <img src="assets/images/welcome.png" alt />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="welcome-text mt-5 mt-lg-0">
                                <h2>Welcome to our clinic</h2>
                                <p className="pt-3">Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.</p>
                                <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                                <a href="#" className="template-btn mt-3">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Welcome Area End */}
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
                            <OwlCarousel {...departmentOption} className="department-slider owl-carousel owl-theme">
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
            {/* Patient Area Starts */}
            <section className="patient-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-top text-center">
                                <h2>Patient are saying</h2>
                                <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="single-patient mb-4">
                                <img src="assets/images/patient1.png" alt />
                                <h3>daren jhonson</h3>
                                <h5>hp specialist</h5>
                                <p className="pt-3">Elementum libero hac leo integer. Risus hac road parturient feugiat. Litora cursus hendrerit bib elit Tempus inceptos posuere metus.</p>
                            </div>
                            <div className="single-patient">
                                <img src="assets/images/patient2.png" alt />
                                <h3>black heiden</h3>
                                <h5>hp specialist</h5>
                                <p className="pt-3">Elementum libero hac leo integer. Risus hac road parturient feugiat. Litora cursus hendrerit bib elit Tempus inceptos posuere metus.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 align-self-center">
                            <div className="appointment-form text-center mt-5 mt-lg-0">
                                <h3 className="mb-5">appointment now</h3>
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Name'" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Your Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email'" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="datepicker" placeholder="Date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Date'" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" cols={20} rows={7} placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required defaultValue={""} />
                                    </div>
                                    <a href="#" className="template-btn">appointment now</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Patient Area Starts */}
            {/* Specialist Area Starts */}
            <section className="specialist-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-top text-center">
                                <h2>Our specialish</h2>
                                <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-doctor mb-4 mb-lg-0">
                                <div className="doctor-img">
                                    <img src="assets/images/doctor1.jpg" alt className="img-fluid" />
                                </div>
                                <div className="content-area">
                                    <div className="doctor-name text-center">
                                        <h3>ethel davis</h3>
                                        <h6>sr. faculty data science</h6>
                                    </div>
                                    <div className="doctor-text text-center">
                                        <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                                        <ul className="doctor-icon">
                                            <li><a href="#"><i className="fa fa-facebook" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-twitter" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-linkedin" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-pinterest" /></a><a /></li><a>
                                            </a></ul><a>
                                        </a></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="col-lg-3 col-sm-6"><a>
                        </a><div className="single-doctor mb-4 mb-lg-0"><a>
                            <div className="doctor-img">
                                <img src="assets/images/doctor2.jpg" alt className="img-fluid" />
                            </div>
                        </a><div className="content-area"><a>
                            <div className="doctor-name text-center">
                                <h3>dand mories</h3>
                                <h6>sr. faculty plastic surgery</h6>
                            </div>
                        </a><div className="doctor-text text-center"><a>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                        </a><ul className="doctor-icon"><a>
                        </a><li><a /><a href="#"><i className="fa fa-facebook" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-twitter" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-linkedin" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-pinterest" /></a><a /></li><a>
                                            </a></ul><a>
                                        </a></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="col-lg-3 col-sm-6"><a>
                        </a><div className="single-doctor mb-4 mb-sm-0"><a>
                            <div className="doctor-img">
                                <img src="assets/images/doctor3.jpg" alt className="img-fluid" />
                            </div>
                        </a><div className="content-area"><a>
                            <div className="doctor-name text-center">
                                <h3>align board</h3>
                                <h6>sr. faculty data science</h6>
                            </div>
                        </a><div className="doctor-text text-center"><a>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                        </a><ul className="doctor-icon"><a>
                        </a><li><a /><a href="#"><i className="fa fa-facebook" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-twitter" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-linkedin" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-pinterest" /></a><a /></li><a>
                                            </a></ul><a>
                                        </a></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a><div className="col-lg-3 col-sm-6"><a>
                        </a><div className="single-doctor"><a>
                            <div className="doctor-img">
                                <img src="assets/images/doctor4.jpg" alt className="img-fluid" />
                            </div>
                        </a><div className="content-area"><a>
                            <div className="doctor-name text-center">
                                <h3>jeson limit</h3>
                                <h6>sr. faculty plastic surgery</h6>
                            </div>
                        </a><div className="doctor-text text-center"><a>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                        </a><ul className="doctor-icon"><a>
                        </a><li><a /><a href="#"><i className="fa fa-facebook" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-twitter" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-linkedin" /></a><a /></li><a>
                                            </a><li><a /><a href="#"><i className="fa fa-pinterest" /></a><a /></li><a>
                                            </a></ul><a>
                                        </a></div><a>
                                    </a></div><a>
                                </a></div><a>
                            </a></div><a>
                        </a></div><a>
                    </a></div><a>
                </a></section><a>
                {/* Specialist Area Starts */}
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
                {/* News Area Starts */}
            </a><section className="news-area section-padding"><a>
            </a><div className="container"><a>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-top text-center">
                            <h2>Recent medical news</h2>
                            <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                        </div>
                    </div>
                </div>
            </a><div className="row"><a>
            </a><div className="col-lg-4 col-md-6"><a>
            </a><div className="single-news"><a>
                <div className="news-img">
                    <img src="assets/images/news1.jpg" alt className="img-fluid" />
                </div>
            </a><div className="news-text"><a>
                <div className="news-date">
                    22 July 2018
                </div>
            </a><h3><a /><a href="blog-details.html">chip to model coeliac disease</a></h3>
                                    <p>Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me.</p>
                                    <a href="blog-details.html" className="news-btn">read more <i className="fa fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news mt-5 mt-md-0">
                                <div className="news-img">
                                    <img src="assets/images/news2.jpg" alt className="img-fluid" />
                                </div>
                                <div className="news-text">
                                    <div className="news-date">
                                        22 Oct 2018
                                    </div>
                                    <h3><a href="blog-details.html">Galectins An Ancient FaSi Future</a></h3>
                                    <p>Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me.</p>
                                    <a href="blog-details.html" className="news-btn">read more <i className="fa fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news mt-5 mt-lg-0">
                                <div className="news-img">
                                    <img src="assets/images/news3.jpg" alt className="img-fluid" />
                                </div>
                                <div className="news-text">
                                    <div className="news-date">
                                        22 Sep 2018
                                    </div>
                                    <h3><a href="blog-details.html">Getting the Most Out of the CLARI</a></h3>
                                    <p>Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me.</p>
                                    <a href="blog-details.html" className="news-btn">read more <i className="fa fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News Area Starts */}
        </div>

    );
}

export default Home;