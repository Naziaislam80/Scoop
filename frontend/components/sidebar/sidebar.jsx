import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard_container'
import ChannelIndex from '../channels/channel_index_container';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        // this.renderDropdown = this.renderDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        // this.handleLogout = this.handleLogout.bind(this);
    }

    toggleDropdown(event) {
        event.preventDefault();
        this.setState({
            showDropdown: true
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showDropdown: false }, () => { document.removeEventListener('click', this.closeMenu) });
    }
    // handleLogout(e) {
    //     e.preventDefault;
    //     debugger
    //     console.log(this.props)
    // }
    renderDropdown() {
        const { logout } = this.props;
        if (this.state.showDropdown) {
            // debugger
            return (
                <div className="dropdown-logout">
                    <div>
                        <Link className="btn logoutbutton" to="" onClick={logout}>Logout</Link>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

     
    render() {
        const { logout } = this.props;
        
        return (
            <>
                <div className="dashboard">
                    <Dashboard />

                </div>
            <div className="sideBar-message">
                    <div className="client-logo-dropdown" onClick={this.toggleDropdown}>
                        <img
                            src={slackURL}
                            className="sidebar-logo-img"
                        />
                        <h1 className="logo1">Scoop</h1>
                    </div>
                    <div className="test">
                    {this.renderDropdown()}
                        {/* <Link className="btn logoutbutton" to="" onClick={logout}>Logout</Link> */}
                   </div>
            <div className="sidebar-div">
                <div className="sidebar-container" id="loggedIn">
                <div className="sidebar-toplink">
                </div>
                <div>
                <h1 className="dashboard-title"></h1>
                    </div>
                </div>
                    <ChannelIndex />
            </div>
        </div>
               
           
            </>
        );
    }
}

export default SideBar;