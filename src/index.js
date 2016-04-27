import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'react-fastclick';


// Main Entry
///////////////////////////

import Items from './components/Items/Items';
import ItemsReducer from './components/Items/Items.reducer';


// Main Render
///////////////////////////

ReactDOM.render(
  <Provider store={createStore(ItemsReducer)}>
    <Items />
  </Provider>,
  document.getElementById('root')
);
