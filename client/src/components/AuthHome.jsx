import React, {useState}from "react";
import {Route, Routes} from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {Auth} from './Auth';
import axios from 'axios';

const apiKey = 'rjme97q4t4rx';
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

const cookies = new Cookies();

const AuthHome = async(e) => {
    const [form, setForm] = useState(initialState);
    const [signUp, setSignUp] = useState(true);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 
    };
    e.preventDefault(); 
    

    const { username, password, email, phoneNumber} = form;
        const URL = 'http://localhost:5000/authhome';

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
        return(
            <Route path="/authhome" element={<AuthHome />} />
        )

}

export default AuthHome;