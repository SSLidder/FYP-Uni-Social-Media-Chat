import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth, Homepage, AuthHome, SignUp } from './components';
import {Test} from './components/Test';
import {NewTest} from './components/NewTest';
import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();


const authenticationToken = cookies.get("token");
const apiKey = 'mmcv36frap4d';

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
    const [createType, setCreateType] = useState('');
    const [creatingChannel, setCreatingChannel] = useState(false);
    const [editingChannel, setEditingChannel] = useState(false);

    if(!authenticationToken) {
        return <Auth />
    }

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer  
                    creatingChannel={creatingChannel}
                    setCreatingChannel={setCreatingChannel}
                    setCreateType={createType}
                    setEditingChannel={setEditingChannel}
                />
                <ChannelContainer 
                    creatingChannel={creatingChannel}
                    setCreatingChannel={setCreatingChannel}
                    editingChannel={editingChannel}
                    setEditingChannel={setEditingChannel}
                    createType={createType}
                />
            </Chat>
        </div>
    )
    // return(
    //     <Routes>
    //         <Route path='/' element={<Homepage />} />
    //         <Route path='/auth' element={<Auth />} />
    //         <Route path='/authhome' element={<AuthHome />} />
    //         <Route path='/signup' element={<SignUp />} />

    //     </Routes>
    // )
}

export default App;