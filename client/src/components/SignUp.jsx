import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import chatimg2 from '../assets/chatimg2.jpeg';
import { Route, useNavigate } from "react-router-dom";
import { Test } from "./Test";
import { ChannelListContainer, ChannelContainer, Homepage, AuthHome } from './';
import { Chat } from 'stream-chat-react';

import { StreamChat } from 'stream-chat';

const cookies = new Cookies();

const apiKey = 'mmcv36frap4d ';
const client = StreamChat.getInstance(apiKey);

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
}

const SignUp = () => {
    const [form, setForm] = useState(initialState);
    const [signUp, setSignUp] = useState(true);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 
    };

    const cookies = new Cookies();
    const authenticationToken = cookies.get("token");

    const navigate = useNavigate();

    useEffect(() => {
        if (authenticationToken) {
            navigate("/dashboard");
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { username, password, email, phoneNumber} = form;
        const URL = 'http://localhost:5000/auth';

        const {data: {token, userID, hashPassword, firstName, lastName}} = await axios.post(`${URL}/signup`, {
            username, password, firstName: form.firstName, lastName: form.lastName, email, phoneNumber,
        })

        cookies.set('token', token)
        cookies.set('username', username)
        cookies.set('firstName', firstName)
        cookies.set('lastName', lastName)
        cookies.set('userID', userID)
        cookies.set('email', email)
        cookies.set('phoneNumber', phoneNumber)
        cookies.set('hashPassword', hashPassword)

        navigate("/dashboard");

        // window.location.reload();
        // return(
        //     <Route path="/auth" element={<SignUp />} />
        // )

    };

    return(
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
                                Test
                            </a>
                        </li>
                        <li>
                            <a href="/auth" >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </nav>
        <div className="auth-container">
            
            {/* <p className="homepage-header">University Social Platform</p> */}
{/*             
            <div className="formbg-outer">
                <div className="formbg" /> */}
                    {/* <p>{signUp ? 'Sign Up' : 'Login'}</p> */}
                    {/* <span class="padding-bottom--15">Sign in to your account</span> */}

                    <form onSubmit={handleSubmit} class="stripe-login">
                            <h1 className="form">Sign Up</h1>
                            <div className="textFields">
                                <label htmlFor='firstName'>First Name</label>
                                <span></span>
                                <input
                                    name="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="textFields">
                                <label htmlFor='lastName'>Last Name</label>
                                <span></span>
                                <input
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="textFields">
                                <label htmlFor='username'>Username</label>
                                <span></span>
                                <input
                                    name="username"
                                    type="text"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="textFields">
                                <label for="email">Enter your univeristy email</label>
                                <span></span>
                                <input type="email" name="email" pattern=".+.ac.uk" required></input>
                            </div>
                            <div className="textFields">
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <span></span>
                                <input
                                    name="phoneNumber"
                                    type="number"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="textFields">
                                <label htmlFor='password'>Password</label>
                                <span></span>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="textFields">
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <span></span>
                                <input
                                    name="confirmPassword"
                                    type="password"

                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <button className="submitButton">{"Sign Up"}</button>
                            <div className="loginSwitch">
                                Already have an account? Sign in
                            </div>
                    </form>

                        {/* <p>   
                            {signUp ? "Already have an account?" : "Don't have an account?"}
                            <span onClick={switchForm}>
                                {signUp ? "Sign In Instead" : "Create Account"}
                            </span>
                        </p> */}
                        </div>
                    </div>

            // </div>
    )
    
}

export default SignUp;