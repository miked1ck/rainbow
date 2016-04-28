import React from 'react';
import {store} from 'redux';
import {connect} from 'react-redux';
import Scroll from 'scroll-js';


// Component
///////////////////////////

class Item extends React.Component {
  _onClickItem(index) {
    this.props._onClickItem(index);

    // scroll to item you just clicked
    const scroll = new Scroll(document.body);
    const h = window.innerHeight / 10;
    const y = (+index) * h;
    scroll.to(0, y, {easing: 'easeInOutCubic', duration: 300});
  }

  _isExpanded(index) {
    let classes = [];

    if (index === this.props.expandingTo)
      classes = [...classes, 'is-expandingTo'];
    else if (index === this.props.expandingFrom)
      classes = [...classes, 'is-expandingFrom'];

    return classes.join(' ');
  }

  render() {
    const item = this.props.item;

    return (
      <li className={'Item ' + this._isExpanded(this.props.index)} onClick={() => this._onClickItem(this.props.index)} style={{background: this.props.color}}>
        <a href="#"><span>{item.title}</span></a>
        <div className="item-inner">
          <span className="item-subtitle">{item.subtitle}</span>
          <ul className="item-meta">
            {item.meta.map(function(meta) {
              return <li>{meta}</li>
            })}
          </ul>
        </div>
      </li>
    );
  }
}


// Store
///////////////////////////

const itemState = (state) => {
  return { expandingTo: state.expandingTo, expandingFrom: state.expandingFrom };
};

const itemDispatch = (dispatch) => {
  return {
    _onClickItem: (index) => {
      dispatch({ type: 'EXPAND', expandingTo: index });
    }
  }
};


// Export
///////////////////////////

export default connect(itemState, itemDispatch)(Item);
