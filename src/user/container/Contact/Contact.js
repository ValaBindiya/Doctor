import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact(props) {
    return (
        <div>
            {/* Banner Area Starts */}
            <section className="banner-area other-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Contact Us</h1>
                            <NavLink to='/'>Home</NavLink> <span>|</span> <NavLink to='/Contact'>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Area End */}
            {/* Map Area Starts */}
            <section className="map-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="mapBox" className="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom={13} data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia." data-mlat="40.701083" data-mlon="-74.1522848">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Area End */}
            {/* Contact Form Starts */}
            <section className="contact-form section-padding3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-home" />
                                </div>
                                <div className="info-text">
                                    <h3>California, United States</h3>
                                    <p>Santa monica bullevard</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="info-text">
                                    <h3>00 (440) 9865 562</h3>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="into-icon">
                                    <i className="fa fa-envelope-o" />
                                </div>
                                <div className="info-text">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form action="#">
                                <div className="left">
                                    <input type="text" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" required />
                                    <input type="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" required />
                                    <input type="text" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" required />
                                </div>
                                <div className="right">
                                    <textarea name="message" cols={20} rows={7} placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" required defaultValue={""} />
                                </div>
                                <button type="submit" className="template-btn">subscribe now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form End */}
        </div>

    );
}

export default Contact;