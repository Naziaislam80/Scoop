import * as APIUtil from '../util/message_api_util'
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    };
};

export const receiveMessage = (message) => {

    return {
        type: RECEIVE_MESSAGE,
        message
    };
};

export const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    };
};

// thunk action
export const fetchMessages = () => {
    return (dispatch) => {
        return APIUtil.fetchMessages().then((messages) => {
            return dispatch(receiveMessages(messages))
        });
    };
};

export const fetchMessage = (id) => {
    return (dispatch) => {
        return APIUtil.fetchMessage(id).then((message) => {
            return dispatch(receiveMessage(message))
        });
    };
};

export const createMessage = (message) => {
    return (dispatch) => { 
        return APIUtil.createMessage(message).then((message) => {
            return dispatch(receiveMessage(message))
        });
    };
};

export const updateMessage = (message) => {
    return (dispatch) => {
        return APIUtil.updateMessage(message).then((message) => {
            return dispatch(receiveMessage(message))
        });
    };
};

export const fetchChannelMessages = (channelId) => {
    // debugger
    return (dispatch) => {
        return APIUtil.fetchChannelMessages(channelId).then(
            (messages) => { return dispatch(receiveMessages(messages)) },
            (errors) => { return dispatch(receiveMessageErrors(errors)) }
        );
    };
};

