import React from 'react';
import photo from '../../../image/photo2.png';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faLink } from '@fortawesome/free-solid-svg-icons';
import { Button, Nav } from 'react-bootstrap';


const Hero = () => {
    return (
        <div className="container">
            <div className="row align-items-center py-2 py-md-5">

                <div className="col-md-7 text-center text-md-left  text-color order-2 order-md-1 my-3 ">
                   <p className="hi">Hi, This is </p>
                   <h1 data-text="Abdulla Al Noman"> Abdulla Al <span>Noman</span></h1>
                   <p className="description">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                   <Button className="resume pl-3"> <Nav.Link className="resume2 p-0 m-0"  href="/about">About Me</Nav.Link></Button>
                </div>

               <div className="col-md-5  order-1 order-md-2 my-3 ">
                  <img className="w-75 md-float-right" src={photo} alt=""/> <br/>
               </div>

            </div>

            {/* <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                       <div className="social-icon">  
                          <FontAwesomeIcon className="pr-3 text-primary" icon={faGift} />
                          <FontAwesomeIcon className="pr-3" icon={faLink} />
                       </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;