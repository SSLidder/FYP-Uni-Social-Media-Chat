import React from "react";
import { Auth } from './index';
import '../App.css';
import brains from '../assets/brains.jpeg';
import { Form, Link } from "react-router-dom";
import { SignUp } from './index';
import learning from '../assets/learning.jpeg';

const Homepage = () => {
    
    return(

        <body className="homepageBody"> 
            <div className="homepage-navbar">
                <nav className="navbar">
                    <a href="/" className="navTitle">
                        USMP
                    </a>
                    <ul>
                        <li><a href="/test">About</a></li>
                        <li><a href="/test">Support</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
            
                <p className="HPTitle"> Welcome to the University Social Media Platform that meets all your needs!</p>
                <p className="HPText">
                    
                    This is the top platform for you to speak with other students and get your questions answered!<br></br>
                    Also, you can request help from other students on a space where you can feel more comfortable.
                </p>
            

                <p className="HPExample">
                This platform comes with the main features needed to make your learning experience better including: <br></br>
                - Discussions with others students<br></br>
                - Private messages with others<br></br>
                - Simple user interface<br></br>
                </p>
                
                <p className="textsize">Why wait. Join the community now! </p>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/SignUp" className="firstButton">Get Started</Link>
                <Link to="/About" className="firstButton">Learn more</Link>

                

            
                <img src={learning} alt="learning" className="imgtext"/>
            
         

                
                
                {/* <p className="HPExample1">Communicating with others is a proven method of learning!</p> */}

        </body>

    )
}

export default Homepage;

