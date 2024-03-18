import React from 'react';
import Header from '../user/component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import Departments from '../user/container/Departments/Departments';
import Doctors from '../user/container/Doctors/Doctors';
import About from '../user/container/About/About';
import Elements from '../user/container/Elements/Elements';
import Blog_Home from '../user/container/Blog_Home/Blog_Home';
import Blog_Details from '../user/container/Blog_Details/Blog_Details';
import Contact from '../user/container/Contact/Contact';
import Footer from '../user/component/Footer/Footer';

function UserRoute(props) {
    return (
        <>
      <Header />

      <Routes>

        <Route extract path='/' element={<Home />} />
        <Route extract path='/Departments' element={<Departments />} />
        <Route extract path='/Doctor' element={<Doctors />} />
        <Route extract path='/About' element={<About />} />
        <Route extract path='/Element' element={<Elements />} />
        <Route extract path='/Blog_Home' element={<Blog_Home />} />
        <Route extract path='/Blog_Details' element={<Blog_Details />} />
        <Route extract path='/Contact' element={<Contact />} />

      </Routes>

      <Footer />
    </>
    );
}

export default UserRoute;