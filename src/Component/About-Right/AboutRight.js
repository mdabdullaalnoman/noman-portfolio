import React from 'react';
import photo3 from '../../image/photo3.jpg';
import './AboutRight.css';

const AboutRight = () => {
    return (
        <div className="col-12 col-md-6 ">
            <div className="d-none d-md-block">
              <img className="w-50 float-right img" src={photo3} alt="photo"></img>
            </div>
        </div>
    );
};

export default AboutRight;