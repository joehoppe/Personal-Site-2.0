import React from 'react';
import { Link } from "react-router-dom";

const TopNav = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Joseph Hoppe</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" title="Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AboutMe/" title="About Me">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/disclaimer/" title="Disclaimer">Disclaimer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default TopNav