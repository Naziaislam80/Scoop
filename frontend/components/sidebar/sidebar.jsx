import React from 'react';
import { Link } from 'react-router-dom';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

     
    render() {l
        const { logout } = this.props;
        return (
            <div className="sidebar-div" id="loggedIn">
                <div className="sidebar-toplink">
                    <h1>
                        <Link to="/" className="home-link">
                            Scoop
                </Link>
                    </h1>
                </div>
                <Link className="btn logoutbutton" to="" onClick={logout}>Logout</Link>
            </div>
        );
    }
}

export default SideBar;