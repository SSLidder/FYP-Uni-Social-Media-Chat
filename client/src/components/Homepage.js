import React from "react";
import { Auth } from './index';
import '../App.css';
import brains from '../assets/brains.jpeg';

const Homepage = () => {

    return(
        <div>
            <div className="homepage-navbar">
                {/* <ul>
                    <li className="homePageLI"><a href="/Auth">Login</a></li>
                    <li className="homePageLI"><a>Sign up</a></li>
                </ul> */}
                <nav className="navbar">
                    <a href="/" className="navTitle">
                        USMP
                    </a>
                    <ul>
                        <li>
                            <a href="/test" >
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/test" >
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="/auth" >
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a href="/auth" >
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            {/* <p className="homepage-header">University Social Platform</p> */}
            </div>
            <body> 
                <p className="HPTitle"> Welcome to the University Social Media Platform that meets all your needs!</p>
                <p className="HPText">
                    This platform has been designed to allow you to speak to other students about your course <br></br>
                    Also, you can request help from other students on a space where you can feel more comfortable.
                </p>
               
                <br></br>
                <p className="HPExample">
                This platform comes with the main features needed to make your learning experience better including: <br></br>
                • Discussion with other students  <br></br>
                • Private messages with others <br></br>
                • Simple User Interface
                </p>
                <br></br>
                <p className="textsize">A reliable platform for getting help with your work! </p>
                <br></br>
                <br></br>
                <br></br>
                <img src={brains} alt="brains" />
                

            <div>
                {/* <img src={chatimg2} alt="chatimg2" className="imgtext"/> */}
            </div>
            </body>
            <footer >
                <a href="/SignUp" className="firstButton">Get Started</a>
                
                {/* <p className="HPExample1">Communicating with others is a proven method of learning!</p> */}
            </footer>
        </div>
    )
}

export default Homepage;

