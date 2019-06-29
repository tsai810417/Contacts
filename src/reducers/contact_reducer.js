import {
  INSERT_CONTACT,
  UPDATE_CONTACT,
  REMOVE_CONTACT
} from "../actions/contact_actions";
import merge from "lodash/merge"

const initialState = {
  "Chris": {
    id: 1,
    name: "Chris",
    email: "chris@mail.com",
    phone: "02-12345678"
  },
  "Joan": {
    id: 2,
    name: "Joan",
    email: "joan@mail.com",
    phone: "02-22345678"
  },
  "Kenneth": {
    id: 3,
    name: "Kenneth",
    email: "kenneth@mail.com",
    phone: "02-32345678"
  },
  "Amy": {
    id: 4,
    name: "Amy",
    email: "amy@mail.com",
    phone: "02-42345678"
  },
  "Michelle": {
    id: 5,
    name: "Michelle",
    email: "michelle@mail.com",
    phone: "02-52345678"
  }
};

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
