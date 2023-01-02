import React from 'react'
import {Link} from "react-router-dom"

export default function Menubar(props) {
  
  return (
    <nav className="menuBar">
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              {!props.loggedIn? <li><Link to="/login">Login</Link></li> : <></>}
              {!props.loggedIn? <li><Link to="/register">Register</Link></li> : <></>}
              <li><h4>User Logged In: {props.user?.email} </h4></li>
              {!props.loggedIn?  <></>: <li><button onClick={props.logout}>Sign Out</button></li>}
          </ul>
          <h1 className="title">BUDGETING APP</h1>
      </nav>
  )
}
