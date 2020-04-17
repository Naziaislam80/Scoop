import { connect } from 'react-redux';
import React from 'react';
import Dashboard from "./dashboard";
import { logout } from '../../actions/session_actions';


const msp = () => {
    return { stuff: "stuff" }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Dashboard);