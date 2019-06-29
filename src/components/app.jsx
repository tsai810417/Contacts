import React from 'react';
import { Provider } from 'react-redux';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Contact List</h1>
    </div>
  </Provider>
);

export default App;
