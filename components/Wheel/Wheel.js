import React from 'react';
import Scroll from 'scroll-js';
import ItemExpanded from '../ItemExpanded/ItemExpanded';

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      expandingFrom: '',
      expandingTo: ''
    }
  }

  _handleOnClick(e, index) {
    let state = {};
    const h = window.innerHeight / 10;
    const y = (+index) * h;

    if (this.state.expandingTo === '') {
      state = {...state, expandingTo: index }
    } else {
      state = {...state, expandingFrom: this.state.expandingTo, expandingTo: index }
    }

    var scroll = new Scroll(document.body);
    scroll.to(0, y, {easing: 'easeInOutCubic', duration: 500});

    this.setState(state);
  }

  _isExpanded(index) {
    let classes = ['item'];

    if (this.state.expandingTo === this.state.expandingFrom) {
      return classes.join(' ');
    }

    if (index == this.state.expandingTo) {
      classes.push('is-expandingTo');
    }

    if (index == this.state.expandingFrom) {
      classes.push('is-expandingFrom');
      setTimeout(function() {
        document.getElementsByClass('is-expandingFrom')[0].classList.remove('is-expandingFrom');
      }, 400);
    }

    return classes.join(' ');
  }

  render() {
    // Duplicate our data set so we can scroll
    // TODO: bind this onScroll instead
    let _keys1 = Object.keys(this.props.items);
    let _keys2 = Object.keys(this.props.items);
    const keys = [..._keys1, ..._keys2];

    return (
      <ul className="Wheel">
        { keys.map(function(value, index) {
          const item = {...this.props.items[value], index: index };
          return (
            <li className={this._isExpanded(index)} onClick={(e) => this._handleOnClick(e, index)} style={{background: item.color}}>
              <a href={'#'+item.index}><span>{item.title}</span></a>
              <ItemExpanded item={item} />
            </li>
          );
        }.bind(this))}
      </ul>
    );
  }
}

export default Wheel;
