import {combineReducers} from 'redux';
import sessionErrorReducer from './session_error_reducer';

const errorReducer = combineReducers({
  session: sessionErrorReducer
})

export default errorReducer;
