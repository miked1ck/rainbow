// import deps
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-fastclick';
import Wheel from '../components/Wheel/Wheel.js';

// get data source
import items from '../data/wine.json';

// main app that binds everything together
class App extends React.Component {
  constructor() {
    super();
    this.state = { 'items': items };
  }

  render() {
    return (
      <div class="app">
        <Wheel items={this.state.items}/>
      </div>
    );
  }
}

// Bind main app to DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
