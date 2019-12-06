import React, {Component} from "react";
export default class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <ul className="header-menu">
                    <li>
                        logo
                    </li>
                    <li>
                        <input/>
                    </li>
                    <li>
                        <button>Main</button>
                    </li>
                    <li>
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