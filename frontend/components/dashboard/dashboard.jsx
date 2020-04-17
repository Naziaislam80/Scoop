import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import ChannelContainer from '../channels/channel_container';
class Dashboard extends React.Component {



    render() {
        const { logout } = this.props;
        return (
            <div className="dashboard">
                    <img
                        src="https://image.flaticon.com/icons/svg/465/465633.svg"
                        className="search-img"
                    />
                <div className="searchdiv">
                <form className="searchPlaceholder">
                    <input
                    
                        type="text"
                        // value=""
                        // onChange={this.update("body")}
                        placeholder="Search Workspace"
                        className="searchBox"
                    />
                </form>
                </div>
                <div className="cog">
                    <img
                        src="https://image.flaticon.com/icons/svg/2001/2001580.svg"
                        className="cog-img"
                    />
                </div>
            </div>
        )
    }
}


export default Dashboard;

