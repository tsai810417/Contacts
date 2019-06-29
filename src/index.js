import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import configureStore from './store/store';
// for test start
import {
  insertContact,
  updateContact,
  removeContact
} from './actions/contact_actions';
// for test end

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({});
  // for test start
  window.store = store;
  window.insertContact = insertContact;
  window.updateContact = updateContact;
  window.removeContact = removeContact
  // for test end

  ReactDOM.render(<App store={ store }/>, document.getElementById('root'));
});
