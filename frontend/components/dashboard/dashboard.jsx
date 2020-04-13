import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
class Dashboard extends React.Component {


    render() {
        const { logout } = this.props;
        return (
            <div className="dashboard">
                <div>
                <h1 className="dashboard-title">Welcome to Scoop</h1>
                <Link className="btn logoutbutton"to="" onClick={logout}>Logout</Link>
                </div>
                <div className="dashboard-sidebar">
                    <SideBar />
                </div>
            </div>
        )
    }
 }


export default Dashboard;