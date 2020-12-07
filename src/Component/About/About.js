import React from 'react';
import AboutLeft from '../About-Left/AboutLeft';
import AboutRight from '../About-Right/AboutRight';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './About.css';

const About = () => {
    return (
           <div className="bg-1 ">
               <Header/>
                <div className="container">
                    <div className="row align-items-center my-2">
                        <AboutLeft/>
                        <AboutRight/>
                    </div>
                </div>  
                <Footer/>       
           </div>
    );
};

export default About;