import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import signUpBG from '../assets/signupbg.png';

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
}

const cookies = new Cookies();

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [signUp, setSignUp] = useState(true);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {firstName, lastName, username, password, email, phoneNumber} = form;
        const URL = 'http://localhost:5000/auth';

        const {data: {token, userID, hashPassword}} = await axios.post(`${URL}/${signUp ? 'signup' : 'login'}`, {
            username, password, firstName, lastName, email, phoneNumber,
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
        <div className="auth-container">
            <div className="auth-fields">
                <div className="auth-fields-content">
                    <p>{signUp ? 'Sign Up' : 'Login'}</p>
                    <form onSubmit={handleSubmit}>
                        {signUp && (
                            <div className="auth-fields-input">
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        )}
                        {signUp && (
                            <div className="auth-fields-input">
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