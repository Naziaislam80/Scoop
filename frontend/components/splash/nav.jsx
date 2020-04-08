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
                <Link className="btn loginbutton" to="/login">Log In</Link>
                <Link className="btn signupbutton" to="/signup">Sign Up</Link>
            </div>
        );

    return (
        <header className="nav-bar">
            <h1 className="logo">Scoop</h1>
            <div className="seshlinks">
                {display}
            </div>
        </header>
    );
};
export default NavBarComponent;