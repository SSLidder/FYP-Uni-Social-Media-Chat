import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import signUpBG from '../assets/signupbg.png';

const Auth = () => {
    const [signUp, setSignUp] = useState(true);
    const handleChange = () => {};

    return(
        <div className="auth-container">
            <div className="auth-fields">
                <div className="auth-fields-content">
                    <p>{signUp ? 'Sign Up' : 'Login'}</p>
                    <form onSubmit={() => {}}>
                        {signUp && (
                            <div className="auth-container-fields-content">
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
                        {signUp && (
                            <div className="auth-container-fields-content">
                                <label htmlFor='username'>Username</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {signUp && (
                            <div className="auth-container-fields-content">
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {signUp && (
                            <div className="auth-container-fields-content">
                                <label htmlFor='password'>Password</label>
                                <input
                                    name="fullName"
                                    type="password"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {signUp && (
                            <div className="auth-container-fields-content">
                                <label htmlFor='password'>Confirm Password</label>
                                <input
                                    name="fullName"
                                    type="password"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div> 
    )
}

export default Auth;