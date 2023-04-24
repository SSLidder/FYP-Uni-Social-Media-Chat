import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import chatimg2 from '../assets/chatimg2.jpeg';
import { Route, Navigate, useNavigate } from "react-router-dom";
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

const Login = () => {
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
        
        const { username, password} = form;
        const URL = 'http://localhost:5000/auth';

        const {data: {token, userID, hashPassword}} = await axios.post(`${URL}/login`, {
            username, password
        })

        cookies.set('token', token)
        cookies.set('username', username)
        cookies.set('userID', userID)

        navigate("/dashboard");
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
                            <a href="/signup" >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </nav>
        <div className="auth-container">
            
                    <form onSubmit={handleSubmit} class="stripe-login">
                            <h1 className="form">Sign In</h1>
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
                                <label htmlFor='password'>Password</label>
                                <span></span>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <button className="submitButton">{"Sign In"}</button>
                            <div className="loginSwitch">
                                <button onClick={() => navigate("/signup")}>Don't have an account? Sign Up</button>
                            </div>
                    </form>
                        </div>
                    </div>
    )
    
}

export default Login;