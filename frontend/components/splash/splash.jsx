import React from 'react';
import { Link } from 'react-router-dom';
class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
        this.loginDemo = this.loginDemo.bind(this)
    }

    loginDemo() {
        const demo = {
            email: 'demo@scoop.com',
            password: 'winner1'
        }

        this.props.login(demo).then(
            () => this.props.history.push('/home')
        );
    };
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