import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './normalize.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
