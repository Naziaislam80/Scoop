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
            // result: []
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        // this.renderDropdown = this.renderDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        // this.handleLogout = this.handleLogout.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
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
                <div className="dropdown-logout1">
                    <div>
                        <Link className="btn logoutbutton1" to="" onClick={logout}>Logout</Link>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    handleSelected() {
        if (this.state.query.length >= 1) this.setState({ query: "" });
        // e => e.target.classList.add(" selected-nav");
    }
    handleSearchChange(e) {
        
        e.preventDefault();
        this.setState({ query: e.currentTarget.value })
        // debugger
    }

    render() {
        let result = [];
        // debugger 
        Object.values(this.props.channels).map((channel) => {
            if (channel.title.toLowerCase().includes(this.state.query.toLowerCase())) result.push(channel)
            // this.props.history.push(`/main/channels/${this.state.channel.id}`)

        })
        // debugger

        const { logout } = this.props;
        if (this.state.query === "") {
            return (
                <div className="dashboard">
                    <img
                        src="https://image.flaticon.com/icons/svg/465/465633.svg"
                        className="search-img"
                    />
                    {/* <a href="https://naziaislam80.github.io/" class="search-img"> */}
                    <div className="searchdiv">
                        <form className="searchPlaceholder">
                            <input

                                type="text"
                                // value="" 
                                onChange={this.handleSearchChange}
                                placeholder="Search Workspace"
                                className="searchBox"
                            />
                        </form>
                        {/* </div>
                        <div className="searchdrop">
                            {result.map((ele) => {
                                return (
                                    <div className="results">
                                        <Link to={`/main/channels/${ele.id}`}>
                                            {ele.title}
                                        </Link>

                                    </div>
                                )
                            })}
                        </div> */}
                    </div>
                    <div className="cog">
                        <div className="cog" onClick={this.toggleDropdown}>
                            <img
                                src="https://image.flaticon.com/icons/svg/2001/2001580.svg"
                                className="cog-img"
                            />
                        </div>
                        <div className="test1">
                            {this.renderDropdown()}
                        </div>
                    </div>
                </div>
            )
        }
    

        if (this.state.query.length >= 1) {
          
            return (
                <div className="dashboard">
                        <img
                            src="https://image.flaticon.com/icons/svg/465/465633.svg"
                            className="search-img"
                        />
                    {/* <a href="https://naziaislam80.github.io/" class="search-img"> */}
                    <div className="searchdiv">
                        <form className="searchPlaceholder">
                            <input
                    
                                type="text"
                                // value="" 
                                onChange={this.handleSearchChange}
                                placeholder="Search Workspace"
                                className="searchBox"
                            />
                        </form>
                        {/* </div> */}
                        <div className="searchdrop">
                            {result.map((ele) => {
                                return (
                                <div className="results">
                                        <Link to={`/main/channels/${ele.id}`} onClick={this.handleSelected}>
                                            <div className="titlelist">
                                            
                                            {ele.title}
                                            </div>
                                        </Link>
                                    
                                </div>
                                )
                            })}
                        </div>
                    </div>   
                    <div className="cog">
                        <div className="cog" onClick={this.toggleDropdown}>
                        <img
                            src="https://image.flaticon.com/icons/svg/2001/2001580.svg"
                            className="cog-img"
                        />
                        </div>
                        <div className="test1">
                            {this.renderDropdown()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default Dashboard;

