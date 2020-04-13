import { RECEIVE_WORKSPACE, RECEIVE_ALL_WORKSPACES, RECEIVE_WORKSPACE_ERRORS } from '../actions/work_space_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_WORKSPACE:
            return merge({}, state, action.work_space);
        case RECEIVE_ALL_WORKSPACES:
            return action.work_spaces;
        default:
            return state;
    };
};