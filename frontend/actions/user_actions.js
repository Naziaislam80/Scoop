import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

const receiveUserErrors = (errors) => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

export const fetchChannelUsers = (channelId) => {
    return (dispatch) => {
        return APIUtil.fetchChannelUsers(channelId).then(
            (workSpaces) => { dispatch(receiveUsers(workSpaces)) },
            (errors) => { dispatch(receiveUserErrors(errors)) }
        );
    };
};

export const fetchUserWorkSpace = (workSpaceId) => {
    return (dispatch) => {
        return APIUtil.fetchUserWorkSpace(workSpaceId).then(
            (messages) => { dispatch(receiveUsers(messages)) },
            (errors) => { dispatch(receiveUserErrors(errors)) }
        );
    };
};
