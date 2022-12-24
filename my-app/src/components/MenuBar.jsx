import React, { Component } from 'react';
import DropDownMenu from './DropDownMenu';

class MenuBar extends Component {

    constructor() {
        super()
        this.state = {
            isOpened: false
        }
    }

    render() { 
        return (
            <nav className="menuBar">
                <ul className="navLinks">
                    <li><button onClick={() => this.changeState()}>Menu</button></li>
                    <li><a href ="#">Home</a></li>
                    <li><a href ="#">Login</a></li>
                </ul>
                <h1 className="title">FRUGALLY</h1>
                <div>{this.renderState()}</div>
            </nav>
        )
    }

    changeState() {
        const isOpened = this.state.isOpened;
        if (isOpened) {
            this.setState({isOpened: false})
        }
        else {
            this.setState({isOpened: true})
        }
        console.log(this.state.isOpened)
    }

    renderState() {
        if (this.state.isOpened) {
            return <DropDownMenu/>
        }
    }
}
 
export default MenuBar;