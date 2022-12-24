import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class DropDownMenu extends Component {
    render() { 
        return (
        <CSSTransition>
        
        <nav className="dropDown">
          <li><a href ="#">SpreadSheet</a></li>
          <li><a href ="#">Analytics</a></li>
          <button className="logout">Logout</button>
        </nav>
        </CSSTransition>)
    }

   
}
 
export default DropDownMenu;