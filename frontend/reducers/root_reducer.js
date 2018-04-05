import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  entities: entitiesReducer
})

export default rootReducer;
