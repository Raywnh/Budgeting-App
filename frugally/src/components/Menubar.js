import React from 'react'
import {Link, useNavigate} from "react-router-dom"

export default function Menubar(props) {
  const navigate = useNavigate()

  return (
    <nav className="menuBar">
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              {!props.user? <li><Link to="/login">Login</Link></li> : <></>}
              {!props.user? <li><Link to="/register">Register</Link></li> : <></>}
              <li><h4>Current User: {props.user?.email} </h4></li>
              {!props.user?  <></>: <li><button onClick={() => props.logout(navigate)}>Sign Out</button></li>}
          </ul>
          <div className='title'>
            <h1 className="title-text">BUDGETING APP</h1>
          </div>
      </nav>
  )
}
