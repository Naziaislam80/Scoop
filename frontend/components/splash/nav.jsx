import React from 'react';
import { Link } from 'react-router-dom';

const NavBarComponent = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div className="seshbuttons">
                <Link className="btn loginbutton" to="/login">Sign in</Link>
                <Link className="btn signupbutton" to="/signup">GET STARTED</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <Link to="/" className="nav-main-link">
                <img
                    src={logoURL}
                    className="logo-img"
                />
                <h1 className="logo">scoop</h1>
            </Link>
            <div className="seshlinks">
                {display}
            </div>
            
        </header>
    );
};
export default NavBarComponent;

