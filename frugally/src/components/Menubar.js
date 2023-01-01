import React from 'react'
import {Link} from "react-router-dom"

export default function Menubar(props) {
  
  return (
    <nav className="menuBar">
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              {props.loginToggled? <li><Link to="/login">Login</Link></li>: <></> }
          </ul>
          <h1 className="title">BUDGETING APP</h1>
      </nav>
  )
}
