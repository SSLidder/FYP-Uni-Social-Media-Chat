import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css';

const cookies = new Cookies();

const apiKey = 'z583b949c5zz';

const authenticationToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authenticationToken) {
    client.connectUser({ 
        id: cookies.get('userID'),
        name: cookies.get('username'), 
        firstName: cookies.get('firstName'),
        lastName: cookies.get('lastName'),
        email: cookies.get('email'),
        phoneNumber: cookies.get('phoneNumber'),
        hashPassword: cookies.get('hashPassword'),
     }, authenticationToken);
}

const App = () => {
    if(!authenticationToken) {
        return <Auth />
    }

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer  
                
                />
                <ChannelContainer 
                
                />
            </Chat>
        </div>
    )
}

export default App;