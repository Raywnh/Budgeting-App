import React from 'react'
import {Link} from "react-router-dom"

export default function Menubar(props) {
  
  return (
    <nav className="menuBar">
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              {!props.user? <li><Link to="/login">Login</Link></li> : <></>}
              {!props.user? <li><Link to="/register">Register</Link></li> : <></>}
              <li><h4>Current User: {props.user?.email} </h4></li>
              {!props.user?  <></>: <li><button onClick={props.logout}>Sign Out</button></li>}
          </ul>
          <h1 className="title">BUDGETING APP</h1>
      </nav>
  )
}
