import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NavContainer from './splash/nav_container';
import SignUpFormContainer from './session/sign_up_container';
import LogInFormContainer from './session/log_in_container';
import SplashContainer from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NavContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;
