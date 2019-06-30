import React from 'react';
import { Provider } from 'react-redux';
import ContactContainer from './contact_container';

const App = ({ store }) => (
  <Provider store={store}>
    <div className="app">
      <h1 className='page-title'>Contact List</h1>
      <ContactContainer />
    </div>
  </Provider>
);

export default App;
