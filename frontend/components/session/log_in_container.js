import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LogInForm from './log_in_form';
import { removeErrors } from '../../actions/error_actions';
import { fetchUserChannels } from "../../actions/channel_actions";
const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors()),
        fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId))
        
    };
};

export default connect(msp, mdp)(LogInForm);
