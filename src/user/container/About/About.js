import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function About(props) {

    const { id } = useParams();

    const [doctor, setDoctor] = useState([]);
    console.log(doctor);

    const getData = async () => {

        try {
            const response = await fetch("http://localhost:5000/doctor");
            const data = await response.json()

            const ans = data.find((v) => v.id === id)
            setDoctor(ans)
            console.log(ans);

        } catch (error) {
            console.log(error.message);
        }

       

    }

    useEffect((v) => {
        getData()
    }, [])

    return (
        <div>
            {/* Banner Area Starts */}
            <section className="banner-area other-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>About Us</h1>
                            <NavLink to='/'>Home</NavLink> <span>|</span> <NavLink to='/About'>about us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Area End */}
            {/* Welcome Area Starts */}
            <section className="welcome-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="welcome-img">
                                <img src="../assets/images/welcome.png" alt />
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
            {/* Patient Area Starts */}
            <section className="patient-area section-padding3">
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
                                <img src={`../${doctor.image}`} alt />
                                <h3>{doctor.name}</h3>
                                <h5>{doctor.specialist}</h5>
                                <p className="pt-3">Elementum libero hac leo integer. Risus hac road parturient feugiat. Litora cursus hendrerit bib elit Tempus inceptos posuere metus.</p>
                            </div>
                            <div className="single-patient">
                                <img src={`../${doctor.image}`} alt />
                                <h3>{doctor.name}</h3>
                                <h5>{doctor.specialist}</h5>
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
        </div>

    );
}

export default About;