import { combineReducers } from 'redux';

import contactReducer from './contact_reducer';

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
