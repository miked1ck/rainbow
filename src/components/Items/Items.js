import React from 'react';
import {connect} from 'react-redux';
import Item from '../Item/Item.js';
import Scroll from 'scroll-js';
import debounce from 'debounce';


// Data
///////////////////////////

import items from '../../data/items.json';


// Component
///////////////////////////

class Items extends React.Component {
  constructor(props) {
      super();

      if (props.params.index) {
        props._expandToItem(props.params.index);

        // scroll to item you just clicked
        const scroll = new Scroll(document.body);
        const h = window.innerHeight / 10;
        const y = (+props.params.index) * h;
        scroll.to(0, y, {easing: 'easeInOutCubic', duration: 300});
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this._handleScroll.bind(this)));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll() {
    let docHeight = document.getElementById('root').offsetHeight;
    let scrollY = window.pageYOffset;
    let appendThreshold = window.innerHeight*1.5;
    if (scrollY >= docHeight-appendThreshold) {
      this.props._appendMore(Object.keys(items));
    }
  }

  render() {
    return (
      <ul className="Items">
        { this.props.keys.map((key, index) => {
          return <Item item={items[key]} index={index} />;
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
