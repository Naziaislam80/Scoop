import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {


    render() {
        const { logout } = this.props;
        return (
            <div className="dashboard">
                <h1 className="dashboard-title">Welcome to Scoop</h1>
                <Link className="btn logoutbutton"to="" onClick={logout}>Logout</Link>
            </div>
        )
    }
 }


export default Dashboard;