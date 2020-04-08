import React from 'react';
import { Link } from 'react-router-dom';
class SplashContainer extends React.Component {
    render() {
    return (
        <>
        <h1>Welcome to scoop </h1>


        <h3>
            <Link to="/" className="header-link">
                Scoop
            </Link>
            <Link to="/signup" className="signup">
                GET STARTED
            </Link>
        </h3>
        </>
    )
    }
};

export default SplashContainer;