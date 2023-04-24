import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Test} from './components/Test';
import {NewTest} from './components/NewTest';
import 'stream-chat-react/dist/css/index.css';
import './App.css';
import { AppRouter } from './routers';

const App = () => {
    return <AppRouter />
}

export default App;