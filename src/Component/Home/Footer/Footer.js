import React from 'react';
import './Footer.css';
import {FaFacebook,TiSocialLinkedinCircular,AiFillGithub} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="footer text-center py-1 py-md-3 ">
            <div className="social-icon py-3 py-md-4">
               <a href="https://web.facebook.com/noman.apparel.4003/"className="mr-3"><FaFacebook/></a>
               <a href="https://www.linkedin.com/in/md-abdulla-al-noman-0701171ba/"className="mr-3">Linked</a>
               <a href="https://github.com/mdabdullaalnoman"className="mr-3">github</a> 
            </div>
            <p> © 2020 <span> <a href="https://web.facebook.com/noman.apparel.4003/">Md Abdulla Al Noman</a></span> . Design & Build by<span> <a href="https://web.facebook.com/noman.apparel.4003/">noman</a></span></p>
        </div>
    );
};

export default Footer;