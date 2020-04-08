import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);