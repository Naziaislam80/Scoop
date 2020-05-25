import { connect } from 'react-redux';
import React from 'react';
import Dashboard from "./dashboard";
import { logout } from '../../actions/session_actions';


const msp = (state) => {
    return {
        stuff: "stuff",
       channels: state.entities.channels,


    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        fetchChannels: () => dispatch(fetchChannels()),

        fetchChannelMessages: (channelId) => {
            return (dispatch(fetchChannelMessages(channelId)))
        },
        receiveMessage: (message) => {
            return (dispatch(receiveMessage(message)))
        },
        receiveMessages: (message) => {
            return (dispatch(receiveMessages(message)))
        }
    }
}

export default connect(msp, mdp)(Dashboard);