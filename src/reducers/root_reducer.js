import { combineReducers } from 'redux';

import contactReducer from './contacts_reducer';

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
