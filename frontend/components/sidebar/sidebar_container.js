import React from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => { 
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
