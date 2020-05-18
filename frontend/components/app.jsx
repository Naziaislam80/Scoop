import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import NavContainer from './splash/nav_container';
import SignUpFormContainer from './session/sign_up_container';
import LogInFormContainer from './session/log_in_container';
import SplashContainer from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import ChannelContainer from "./channels/channel_container";
import MainContainer from "./sidebar/main_container";
import ChannelFormContainer from "./channels/channel_form_container";
import DmFormContainer from "./channels/dm_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
    <div>
        <header>
            <Route
                exact
                path={["/", "/login", "/signup"]}
                component={NavContainer}
            />
        </header>

        <Switch>
            <ProtectedRoute
                exact
                path="/main/channels/create"
                component={ChannelFormContainer}
            />
            <ProtectedRoute
                exact
                path="/main/channels/create"
                component={DmFormContainer}
            />
            <ProtectedRoute path="/main/channels/:channelId" component={GreetingContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute
                exact
                path={["/main", "/main/channels/:channelId"]}
                component={ChannelContainer}
            />
        </Switch>
    </div>
);

export default App;
