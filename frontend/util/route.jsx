import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, channelId, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to={`/main/channels/${channelId}`} />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const mapStateToProps = ({entities: {users}, session}) => {
    const loggedIn = Boolean(session.id);
    return { 
        loggedIn,
        channelId: loggedIn ? users[session.id].channelId : null
    };
};
    

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
