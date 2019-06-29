import {
  INSERT_CONTACT,
  UPDATE_CONTACT,
  REMOVE_CONTACT
} from "../actions/contact_actions";
import merge from "lodash/merge"

const initialState = {};

const contactReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case INSERT_CONTACT:
      const newContact = { [action.contact.name]: action.contact }
      return merge({}, state, newContact);

    case UPDATE_CONTACT:
      newState = merge({}, state);
      newState[action.contact.name] = action.contact
      return newState;

    case REMOVE_CONTACT:
      newState = merge({}, state);
      delete newState[action.contact.name];
      return newState;

    default:
      return state;
  }
};

export default contactReducer;
