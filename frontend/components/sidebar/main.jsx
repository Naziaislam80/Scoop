import React from 'react';
import SideBar from './sidebar_container';
import { Route, Switch } from 'react-router-dom';
import ChannelContainer from '../channels/channel_container';
import NavBar from "../splash/nav";

const Main = (props) => {
    return (
        <div className="main-div">
            <Route path={["/", "/main", "/main/channels/:channelId"]}
                component={SideBar} />
            <Switch>
                <Route
                    path="/main/channels/:channelId"
                    component={ChannelContainer}
                />
            </Switch>
        </div>
    );
}

export default Main;