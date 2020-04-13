import { receiveCurrentUser } from '../actions/session_actions';
import * as APIUtil from '../util/workspace_api_util';


export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE';
export const RECEIVE_ALL_WORKSPACES = 'RECEIVE_ALL_WORKSPACES';
export const RECEIVE_WORKSPACE_ERRORS = 'RECEIVE_WORKSPACE_ERRORS';

const receiveWorkSpace = (work_space) => {
    return {
        type: RECEIVE_WORKSPACE,
        work_space
    };
};

const receiveAllWorkSpaces = (work_spaces) => {
    return {
        type: RECEIVE_ALL_WORKSPACES,
        work_spaces
    };
};

export const fetchWorkSpace = (id) => {
    return (dispatch) => {
        return APIUtil.fetchWorkSpace(id).then(work_space => {
            dispatch(receiveWorkSpace(work_space));
        });
    };
};

export const fetchUserWorkSpaces = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUserWorkSpaces(userId).then(work_spaces => {
            dispatch(receiveAllWorkSpaces(work_spaces));
        });
    };
};

export const createWorkSpace = (work_space) => {
    return (dispatch) => {
        return APIUtil.createWorkSpace(work_space).then(work_space => {
            dispatch(receiveWorkSpace(work_space));
        });
    };
};