import React from 'react';
import { NavLink } from 'react-router-dom';

function Blog_Details(props) {
    return (
        <div>
            {/* Banner Area Starts */}
            <section className="banner-area other-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Blog Details</h1>
                            <NavLink to='/'>Home</NavLink> <span>|</span> <NavLink to='/Blog_Details'>blog details</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Area End */}
            {/*================Blog Area =================*/}
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                    <div className="feature-img">
                                        <img className="img-fluid" src="assets/images/blog-details/feature-img1.jpg" alt />
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-3">
                                    <div className="blog_info text-right">
                                        <div className="post_tag">
                                            <a href="#">Food,</a>
                                            <a className="active" href="#">Technology,</a>
                                            <a href="#">Politics,</a>
                                            <a href="#">Lifestyle</a>
                                        </div>
                                        <ul className="blog_meta list">
                                            <li><a href="#">Mark wiens<i className="fa fa-user-o" /></a></li>
                                            <li><a href="#">12 Dec, 2017<i className="fa fa-calendar-o" /></a></li>
                                            <li><a href="#">1.2M Views<i className="fa fa-eye" /></a></li>
                                            <li><a href="#">06 Comments<i className="fa fa-comment-o" /></a></li>
                                        </ul>
                                        <ul className="social-links">
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-github" /></a></li>
                                            <li><a href="#"><i className="fa fa-behance" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 blog_details">
                                    <h5>Astronomy Binoculars A Great Alternative</h5>
                                    <p className="excert">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                                    </p>
                                    <p>
                                        Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                    </p>
                                    <p>
                                        Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="quotes">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid" src="assets/images/blog-details/post-img1.jpg" alt />
                                        </div>
                                        <div className="col-6">
                                            <img className="img-fluid" src="assets/images/blog-details/post-img2.jpg" alt />
                                        </div>
                                        <div className="col-lg-12 my-4">
                                            <p>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                            </p>
                                            <p>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area">
                                <h4>05 Comments</h4>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="assets/images/blog-details/c1.jpg" alt />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Emilly Blunt</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="assets/images/blog-details/c2.jpg" alt />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Elsie Cum</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="assets/images/blog-details/c3.jpg" alt />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Annie Steph</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="assets/images/blog-details/c4.jpg" alt />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Maria Luna</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="assets/images/blog-details/c5.jpg" alt />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Ina Hayes</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h4>Leave a Reply</h4>
                                <form>
                                    <div className="form-group form-inline">
                                        <div className="form-group col-lg-6 col-md-6 name">
                                            <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 email">
                                            <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
                                    </div>
                                    <a href="#" className="template-btn">Post Comment</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_sidebar">
                                <aside className="single_sidebar_widget search_widget">
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="button"><i className="fa fa-search" /></button>
                                        </span>
                                    </div>{/* /input-group */}
                                    <div className="br" />
                                </aside>
                                <aside className="single_sidebar_widget author_widget">
                                    <img className="author_img rounded-circle" src="assets/images/blog/author.png" alt />
                                    <h5>Charlie Barber</h5>
                                    <p>Senior blog writer</p>
                                    <div className="social_icon">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-github" /></a>
                                        <a href="#"><i className="fa fa-behance" /></a>
                                    </div>
                                    <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                                    <div className="br" />
                                </aside>
                                <aside className="single_sidebar_widget popular_post_widget">
                                    <h4 className="widget_title">Popular Posts</h4>
                                    <div className="media post_item">
                                        <img src="assets/images/blog/popular-post/post1.jpg" alt="post" />
                                        <div className="media-body">
                                            <a href="blog-details.html"><h5>Space The Final Frontier</h5></a>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/images/blog/popular-post/post2.jpg" alt="post" />
                                        <div className="media-body">
                                            <a href="blog-details.html"><h5>The Amazing Hubble</h5></a>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/images/blog/popular-post/post3.jpg" alt="post" />
                                        <div className="media-body">
                                            <a href="blog-details.html"><h5>Astronomy Or Astrology</h5></a>
                                            <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="assets/images/blog/popular-post/post4.jpg" alt="post" />
                                        <div className="media-body">
                                            <a href="blog-details.html"><h5>Asteroids telescope</h5></a>
                                            <p>01 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="br" />
                                </aside>
                                <aside className="single_sidebar_widget ads_widget">
                                    <a href="#"><img className="img-fluid" src="assets/images/blog/add.jpg" alt /></a>
                                    <div className="br" />
                                </aside>
                                <aside className="single_sidebar_widget post_category_widget">
                                    <h4 className="widget_title">Post Catgories</h4>
                                    <ul className="list cat-list">
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Technology</p>
                                                <p>37</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Lifestyle</p>
                                                <p>24</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Fashion</p>
                                                <p>59</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Art</p>
                                                <p>29</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Food</p>
                                                <p>15</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Architecture</p>
                                                <p>09</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between">
                                                <p>Adventure</p>
                                                <p>44</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="br" />
                                </aside>
                                <aside className="single-sidebar-widget newsletter_widget">
                                    <h4 className="widget_title">Newsletter</h4>
                                    <p>
                                        Here, I focus on a range of items and features that we use in life without
                                        giving them a second thought.
                                    </p>
                                    <div className="form-group d-flex flex-row">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true" /></div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" />
                                        </div>
                                        <a href="#" className="bbtns">Subscribe</a>
                                    </div>
                                    <p className="text-bottom">You can unsubscribe at any time</p>
                                    <div className="br" />
                                </aside>
                                <aside className="single-sidebar-widget tag_cloud_widget">
                                    <h4 className="widget_title">Tag Clouds</h4>
                                    <ul className="list">
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Architecture</a></li>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Art</a></li>
                                        <li><a href="#">Adventure</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Adventure</a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================Blog Area =================*/}
        </div>

    );
}

export default Blog_Details;