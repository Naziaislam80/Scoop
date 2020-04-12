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
            <div className="navlinks">
                <div className="nav-header1">
                    Why Scoop?
                    <div className="nav-header-message1">
                    Why use email when you can use Scoop!
                    </div>
                </div>
                <div className="nav-header2">
                    Solutions
                    <div className="nav-header-message2">
                    Tired of sending a million emails? Try communicating with
                    Scoop!
                    </div>
                </div>
                <div className="nav-header3">
                    Resources
                    <div className="nav-header-message3"> 
                    Who needs resources when you have scoop!
                    </div>
                </div>
                <div className="nav-header4">
                    Pricing
                    <div className="nav-header-message4"> 
                    Priceless
                    </div>

                </div>
          </div>
            <div className="seshlinks">
                {display}
            </div>
            
        </header>
    );
};
export default NavBarComponent;

