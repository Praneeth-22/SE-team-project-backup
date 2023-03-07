import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Components/Chat/Register';
import Home from './Components/Chat/Home';
import { AuthContextProvider } from './Components/Chat/AuthContext';
import { ChatContextProvider } from './Components/Chat/ChatContext';
import Routing from './Components/Chat/Routing';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
<ChatContextProvider>
<React.StrictMode>
    <Routing/>
  </React.StrictMode>
  </ChatContextProvider>
</AuthContextProvider>
  
);

