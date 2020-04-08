import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors';

const errorsReducer = combineReducers({
    session: SessionErrorsReducer,
});

export default errorsReducer;