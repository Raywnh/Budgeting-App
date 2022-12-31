import React from 'react'
import {Link} from "react-router-dom"

export default function Menubar() {
  return (
    <nav className="menuBar">
          <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
          </ul>
          <h1 className="title">BUDGETING APP</h1>
      </nav>
  )
}
