import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <div className="bg">
            <Header/> 
            <Hero/>
            <Footer/>    
        </div>
    );
};

export default Home;