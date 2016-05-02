import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import Scroll from 'scroll-js';
import Hammer from 'react-hammerjs';


// Component
///////////////////////////

class Item extends React.Component {
  constructor() {
    super();
    this.scroll = new Scroll(document.body);
    this.h = window.innerHeight / 10;
  }

  _onClickItem(e, index) {
    e.preventDefault();
    this.props._onClickItem(index);

    // scroll to item you just clicked
    const y = (+index) * this.h;
    this.scroll.to(0, y, {easing: 'easeInOutCubic', duration: 300});
  }

  _onSwipeItem(e, index) {
    let expandingTo;
    const d = e.direction;
    const map = {
      '8': 'up',
      '16': 'down'
    };

    // return false if its not up or down
    if (Object.keys(map).indexOf(d.toString()) < 0) {
      return false;
    }

    switch(map[d]) {
      case 'up':
        expandingTo = ++index;
        this.props._onSwipeUp(index);
        break;
      case 'down':
        expandingTo = --index;
        this.props._onSwipeDown(index);
    }

    // return false if we're at the top
    if (expandingTo < 0) {
      return false;
    }

    // scroll to item you just clicked
    const y = (expandingTo) * this.h;
    this.scroll.to(0, y, {easing: 'easeInOutCubic', duration: 300});
  }

  _isExpanded(index) {
    let classes = [];

    if (this.props.expandingTo === '') {
      return false;
    }

    if (index === +this.props.expandingTo)
      classes = [...classes, 'is-expandingTo'];
    else if (index === +this.props.expandingFrom)
      classes = [...classes, 'is-expandingFrom'];

    return classes.join(' ');
  }

  render() {
    const {index, item} = this.props;

    return (
        <li key={index} className={'Item ' + this._isExpanded(index)} onClick={(e) => this._onClickItem(e, index)} style={{background: item.color}}>
          <Link to={'/'+index}><span>{item.title}({index})</span></Link>
          <Hammer onSwipe={(e) => this._onSwipeItem(e, index)} vertical={true}>
            <div className="item-inner">
              <span className="item-desc">{item.description}</span>
              <ul className="item-meta">
                {item.meta.map(function(meta, i) {
                  return <li key={index + meta + i}>{meta}</li>
                })}
              </ul>
            </div>
          </Hammer>
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
    },
    _onSwipeUp: () => {
      dispatch({ type: 'SWIPE_UP' });
    },
    _onSwipeDown: () => {
      dispatch({ type: 'SWIPE_DOWN' });
    }
  }
};


// Export
///////////////////////////

export default connect(itemState, itemDispatch)(Item);
