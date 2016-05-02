import React from 'react';
import {connect} from 'react-redux';
import Item from '../Item/Item.js';
import Scroll from 'scroll-js';
import debounce from 'debounce';


// Data
///////////////////////////

import colors from '../../data/colors.json';
import items from '../../data/items.json';


// Component
///////////////////////////

class Items extends React.Component {
  constructor() {
      super();

      // Duplicate our data set so we can scroll
      // TODO: bind this onScroll instead
      this.keys = Object.keys(items);
  }

  render() {
    let i = 0;

    return (
      <ul className="Items">
        { this.keys.map((key, index) => {
          i = (Object.keys(colors).length % index == 0 && index <= 0) ? 0 : i+1;
          return <Item k={key} item={items[key]} index={index} color={colors[i]} />;
        })}
      </ul>
    );
  }
}


// Store
///////////////////////////

const itemsState = (state) => {
  return { expandingTo: state.expandingTo, expandingFrom: state.expandingFrom, keys: state.keys };
};

const itemsDispatch = (dispatch) => {
  return {
    _expandToItem: (index) => {
      dispatch({ type: 'EXPAND', expandingTo: index });
    },
    _appendMore: (keys) => {
      dispatch({ type: 'APPEND', keys: keys });
    }
  }
};


// Export
///////////////////////////

export default connect(itemsState, itemsDispatch)(Items);
