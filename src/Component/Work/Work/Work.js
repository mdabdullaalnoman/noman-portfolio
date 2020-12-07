import React from 'react';
import Footer from '../../Home/Footer/Footer';

import Header from '../../Home/Header/Header';
import Card from '../Card/Card';
import './Work.css';

const Work = () => {
    return (
        <div className="bg">
            <Header/>
            <div className="text-center py-2 py-md-5"><h2>My Work</h2></div>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Work;