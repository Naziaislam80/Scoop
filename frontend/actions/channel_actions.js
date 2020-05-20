import * as APIUtil from '../util/channel_api_utl';
import { receiveCurrentUser } from '../actions/session_actions';


export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNELS";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_ALL_CHANNELS,
        channels
    };
};

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    };
};
const removeChannel = (channelId) => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    };
};

const clearChannelErrors = () => {
    return {
        type: RECEIVE_CHANNEL_ERRORS
    };
};

export const fetchChannels = () => {
    return (dispatch) => {
        return APIUtil.fetchChannels().then((channels) => {
            return dispatch(receiveChannels(channels))
        });
    };
};

export const fetchChannel = (id) => {
    return (dispatch) => {
        return APIUtil.fetchChannel(id).then((channel) => {
            return dispatch(receiveChannel(channel));
        });
    };
};

export const destroyChannel = (id) => {
   
    return (dispatch) => {
       
        return APIUtil.destroyChannel(id).then((channel) => {
            
            return dispatch(removeChannel(channel));
        });
    };
};

export const updateChannel = (id) => {
    return (dispatch) => {
        return APIUtil.updateChannel(id).then((channel) => {
            return dispatch(receiveChannel(channel));
        });
    };
};

export const createChannel = (channel) => {
    return (dispatch) => {
        return APIUtil.createChannel(channel).then((channel) => {
            return dispatch(receiveChannel(channel))
        });
    };
};

export const fetchUserChannels = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUserChannels(userId).then(channels => {
            return dispatch(receiveChannels(channels));
        });
    };
};