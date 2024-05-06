import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Ins from './Institution'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Institution Courses</h1>
    <Ins title = "CIS 210" attend = "Fall 2024" desc = "Teaches SQL" />
    <Ins title = "CIS 255" attend = "Fall 2024" desc = "Teaches Javascript" />
  </React.StrictMode>,
)
