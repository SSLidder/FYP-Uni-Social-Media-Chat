import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import signUpBG from '../assets/signupbg.png';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
}

const Auth = () => {
    const [signUp, setSignUp] = useState(true);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 
    
        // console.log(form);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    const switchForm = () => {
        setSignUp((prevSignUp) => !prevSignUp);
    }
    const [form, setForm] = useState();

    return(
        <div className="auth-container">
            <div className="auth-fields">
                <div className="auth-fields-content">
                    <p>{signUp ? 'Sign Up' : 'Login'}</p>
                    <form onSubmit={handleSubmit}>
                        {signUp && (
                            <div className="auth-fields-input">
                                <label htmlFor='fullName'>Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                            <div className="auth-fields-input">
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
                            <div className="auth-fields-input">
                                <label htmlFor='email'>Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {signUp && (
                            <div className="auth-fields-input">
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
                            <div className="auth-fields-input">
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
                            <div className="auth-fields-input">
                                <label htmlFor='password'>Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        <div className="auth-form-button">
                            <button>{signUp ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth-account">
                        <p>   
                            {signUp ? "Already have an account?" : "Don't have an account?"}
                            <span onClick={switchForm}>
                                {signUp ? "Sign In Instead" : "Create Account"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth_form-container-image">
                <img src={signUpBG} alt="Sign In" />
            </div>
        </div> 
    )
}

export default Auth;