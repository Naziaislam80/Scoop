import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_ERRORS } from '../actions/error_actions';

const SessionErrorReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case REMOVE_ERRORS:
            newState = [];
            return newState;
        default:
            return state;
    }
};

export default SessionErrorReducer;