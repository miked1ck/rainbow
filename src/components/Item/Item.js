import React from 'react';
import {store} from 'redux';
import {connect} from 'react-redux';
import Scroll from 'scroll-js';


// Component
///////////////////////////

class Item extends React.Component {
  _onClickItem(index) {
    const scroll = new Scroll(document.body);
    const h = window.innerHeight / 10;
    const y = ((+index) * h) - h;
    scroll.to(0, y, {easing: 'easeInOutCubic', duration: 300});

    // remove expandingFrom class to reset the CSS/look
    setTimeout(function() {
      document.getElementsByClassName('is-expandingFrom')[0].classList.remove('is-expandingFrom');
    }, 400);

    // dispatch
    this.props._onClickItem(index);
  }

  _isExpanded(index) {
    let classes = [];

    if (index === this.props.expandingTo)
      classes.push('is-expandingTo');

    if (index === this.props.expandingFrom)
      classes.push('is-expandingFrom');

    return classes.join(' ');
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    const color = this.props.color;

    return (
      <li className={'Item ' + this._isExpanded(index)} onClick={() => this._onClickItem(index)} style={{background: color}}>
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
