import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContext, { UserProvider } from './UserContext'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <UserProvider>
    <App />
    </UserProvider>
   
 
)
