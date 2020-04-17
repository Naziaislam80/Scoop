import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/message_actions";
import merge from "lodash/merge";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGES:
            // debugger
            // Object.assign({}, state, action.messages)
            return action.messages;
        case RECEIVE_MESSAGE:
            // debugger
            return merge({}, state, {[action.message.id]:action.message});
        default:
            return state;
    };
};


