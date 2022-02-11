import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import error404 from "./img/Error404.jpg" 
const Error404 = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=''>
            <img src={error404} alt="imagen error404" width="100%" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;