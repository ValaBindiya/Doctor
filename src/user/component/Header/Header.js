import React from 'react';

function Header(props) {
    return (
        <div>
            {/* Header Area Starts */}
            <header className="header-area">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 d-md-flex">
                                <h6 className="mr-3"><span className="mr-2"><i className="fa fa-mobile" /></span> call us now! +1 305 708 2563</h6>
                                <h6 className="mr-3"><span className="mr-2"><i className="fa fa-envelope-o" /></span> medical@example.com</h6>
                                <h6><span className="mr-2"><i className="fa fa-map-marker" /></span> Find our Location</h6>
                            </div>
                            <div className="col-lg-3">
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                        <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header">
                    <div className="container">
                        <div className="row align-items-center justify-content-between d-flex">
                            <div id="logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt title /></a>
                            </div>
                            <nav id="nav-menu-container">
                                <ul className="nav-menu">
                                    <li className="menu-active"><a href="index.html">Home</a></li>
                                    <li><a href="departments.html">departments</a></li>
                                    <li><a href="doctors.html">doctors</a></li>
                                    <li className="menu-has-children"><a href>Pages</a>
                                        <ul>
                                            <li><a href="about.html">about us</a></li>
                                            <li><a href="elements.html">elements</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-has-children"><a href>blog</a>
                                        <ul>
                                            <li><a href="blog-home.html">blog home</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>{/* #nav-menu-container */}
                        </div>
                    </div>
                </div>
            </header>
            {/* Header Area End */}
        </div>

    );
}

export default Header;