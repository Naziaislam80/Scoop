import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import ChannelContainer from '../channels/channel_container';
class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         query: "",
    //         isSearched: false,
    //     }
    //     this.mounted = false;
    //     this.handleSearchChange = this.handleSearchChange.bind(this);
    // }

    // handleSearchChange(e) {
    //     e.preventDefault();
    //     this.setState({ query: e.currentTarget.value })
    // }

    constructor(props) {
        super(props);

        this.state = {
            showDropdown: false,
            query: "",
            isSearched: false,
            result: []
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        // this.renderDropdown = this.renderDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        // this.handleLogout = this.handleLogout.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
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

    handleSearchChange(e) {
        e.preventDefault();
        this.setState({ query: e.currentTarget.value })
    }

    render() {
        // if (this.props.genres.length === 0 || this.props.shows.length === 0 || !this.props.shows) {
        //     return (<div className="search-browse" />)
        // }
        // if (!this.mounted) {
        //     return (<div className="search-browse" />)
        // }

        // const randomShow = this.props.shows[Object.keys(this.props.shows)[Math.floor(Math.random() * Object.keys(this.props.shows).length)]];

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
                    <div className="cog" onClick={this.toggleDropdown}>
                    <img
                        src="https://image.flaticon.com/icons/svg/2001/2001580.svg"
                        className="cog-img"
                    />
                    </div>
                    <div className="test">
                        {this.renderDropdown()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;

