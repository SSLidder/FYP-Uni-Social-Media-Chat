import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import chatimg2 from '../assets/chatimg2.jpeg';
import { Route } from "react-router-dom";
import { Test } from "./Test";
import { ChannelListContainer, ChannelContainer, Homepage, AuthHome } from './';
import { Chat } from 'stream-chat-react';

import { StreamChat } from 'stream-chat';

const cookies = new Cookies();

const apiKey = 'mmcv36frap4d';
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


const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [signUp, setSignUp] = useState(true);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { username, password, email, phoneNumber} = form;
        const URL = 'http://localhost:5000/auth';

        const {data: {token, userID, hashPassword, firstName, lastName}} = await axios.post(`${URL}/${signUp ? 'signup' : 'login'}`, {
            username, password, firstName: form.firstName, lastName: form.lastName, email, phoneNumber,
        })

        cookies.set('token', token)
        cookies.set('username', username)
        cookies.set('firstName', firstName)
        cookies.set('lastName', lastName)
        cookies.set('userID', userID)

        if(signUp) {
            cookies.set('email', email)
            cookies.set('phoneNumber', phoneNumber)
            cookies.set('hashPassword', hashPassword)
        }

        window.location.reload();
    };
    const switchForm = () => {
        setSignUp((prevSignUp) => !prevSignUp);
    }
    
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
                    <span class="padding-bottom--15">Sign in to your account</span>

                    <form onSubmit={handleSubmit} class="stripe-login">
                        {signUp && (
                            <div class="formbg-outer">
                            <div class="formbg">
                              <div class="formbg-inner padding-horizontal--48">
                              <div class="field padding-bottom--24">
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    required 
                                />
                                </div>
                            </div>
                            </div>
                            </div>
                        )}
                        <div class="grid--50-50"></div>
                        {signUp && (
                            <div class="formbg">
                                <div class="field padding-bottom--24"></div>
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                                )}
                            <div class="formbg">
                            <div class="field padding-bottom--24"></div>
                                <label htmlFor='username'>Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        {signUp && (
                            <div class="formbg">
                                <div class="field padding-bottom--24"></div>
                                 <label for="email">Enter your univeristy email</label>
                                <input type="email" name="email" pattern=".+.ac.uk" required></input>
                            </div>
                        )}
                        {signUp && (
                            <div class="formbg">
                                <div class="field padding-bottom--24"></div>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                            <div class="formbg">
                            <div class="field padding-bottom--24"></div>
                                <label htmlFor='password'>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        {signUp && (
                            <div class="formbg">
                                <div class="field padding-bottom--24"></div>
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        <div class="formbg">
                        <div class="field padding-bottom--24"></div>
                            <button>{signUp ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div class="formbg">
                    <div class="field padding-bottom--24"></div>
                        <p>   
                            {signUp ? "Already have an account?" : "Don't have an account?"}
                            <span onClick={switchForm}>
                                {signUp ? "Sign In Instead" : "Create Account"}
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
            // </div>
    )
    
}

export default Auth;