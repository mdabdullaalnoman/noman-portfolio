
import React from 'react';
import { Badge, Nav } from 'react-bootstrap';
import './AboutLeft.css';
import { motion } from "framer-motion";

const AboutLeft = () => {
    return (
        <div className="col-12 col-md-6 about-left">
            <div className=" description">
                <p>Hello! This is abdulla al noman,  </p> <br/>
                <p> A Front-end Web Developer. I can provide clean and fresh code and also a good Learner . Already i have been finished some interesting projects. I love development highly.   
                </p>
            </div>

           <div className="skills my-2 my-md-5">
           <h2 className="skill text-center">Programming Skill </h2>
            <div className="comfortable mb-1">
                <h4>Comfortable</h4>
                <Badge className="badge-bg px-2 py-1">React.js</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">React Router</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Rest API</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Javascript</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">ES6</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">MongoDB</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">React Bootstrap</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Bootstrap4</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">HTML5</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">CSS3</Badge>{' '} 
            </div>
            <div className="familyer mb-1">
                <h4>Familyer</h4>
                <Badge className="badge-bg px-2 py-1">Node.js</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Express.js</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">JSON</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">MaterialUI</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">WordPress</Badge>{' '}
            </div>
            <div className="Tools mb-1">
                <h4>Tools</h4>
                <Badge className="badge-bg px-2 py-1">VS Code</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Git</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Chrome Dev Tool</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Firebase</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Netlify</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Heroku</Badge>{' '}
                <Badge className="badge-bg px-2 py-1">Notepad++</Badge>{' '}
            </div> 
           </div> 
           <div className="py-3">
           <button className="resume px-3 py-2" style={{border:'none', borderRadius:'10px'}}> <Nav.Link className="resume2 p-0 m-0"  href="https://drive.google.com/file/d/1dxDl7pyhDd-hPd-auKiL73Dh0MJ8FAun/view?usp=sharing">Download Resume</Nav.Link>
           </button>
           </div>  
      </div>
    );
};

export default AboutLeft;