import React, {Component} from "react";
import "./header.scss"
export default class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <ul className="header-menu">
                    <li className="menu-logo">
                        logo
                    </li>
                    <li className="menu-search-area">
                        <input className="search-area-input"/>
                    </li>
                    <li className="menu-main">
                        <button>Main</button>
                    </li>
                    <li className="menu-genre">
                        <button>Genre</button>
                    </li>
                </ul>
                <div className="header-auth">
                    <div className="auth-areaBtn">
                        <button>Log In</button>
                    </div>
                </div>
            </header>
        )
    }
}