import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
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
    const {k, index, color, item} = this.props;

    return (
      <li key={k} className={'Item ' + this._isExpanded(index)} onClick={() => this._onClickItem(index)} style={{background: color}}>
        <a href={'#'+k}><span>{item.title}</span></a>
        <div className="item-inner">
          <span className="item-desc">{item.description}</span>
          <ul className="item-meta">
            {item.meta.map(function(meta, i) {
              return <li key={i}>{meta}</li>
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
