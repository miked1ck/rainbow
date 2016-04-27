import React from 'react';
import Item from '../Item/Item.js';


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
      var keys1 = Object.keys(items);
      var keys2 = Object.keys(items);
      this.items_x2 = [...keys1, ...keys2];
  }

  render() {
    let i = 0;

    return (
      <ul className="Items">
        { this.items_x2.map(function(key, index) {
          i = (Object.keys(colors).length % index == 0 && index > 0) ? 0 : i+1;
          return <Item item={items[key]} index={index} color={colors[i]} />;
        }.bind(this))}
      </ul>
    );
  }
}


// Export
///////////////////////////

export default Items;
