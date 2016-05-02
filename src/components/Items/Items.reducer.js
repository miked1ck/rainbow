import items from '../../data/items.json';

// Init state
///////////////////////////

const init = {
  expandingTo: '',
  expandingFrom: '',
  keys: Object.keys(items)
};


// Actions
///////////////////////////

const actions = {
  expand: function(state, action) {
    if (state.expandingTo == '' && state.expandingTo != 0) {
      return { expandingFrom: '', expandingTo: action.expandingTo };
    }

    return { ...state, expandingFrom: state.expandingTo, expandingTo: action.expandingTo };
  },

  collapse: function(state, action) {
    return init;
  },

  append: function(state, action) {
    return {...state, keys: [...state.keys, ...action.keys]};
  },

  swipe_up: function(state, action) {
    return this.expand(state, {...action, expandingTo: ++state.expandingTo});
  },

  swipe_down: function(state, action) {
    if (state.expandingTo == 0) {
      return state;
    }

    return this.expand(state, {...action, expandingTo: --state.expandingTo});
  }
};


// Reducer
///////////////////////////

function reducer(state = init, action) {
  switch (action.type) {
    case 'EXPAND':
      return actions.expand(state, action);
    case 'COLLAPSE':
      return actions.collapse(state, action);
    case 'APPEND':
      return actions.append(state, action);
    case 'SWIPE_UP':
      return actions.swipe_up(state, action);
    case 'SWIPE_DOWN':
      return actions.swipe_down(state, action);
    default:
      return state;
  }
}


// Export
///////////////////////////

export default reducer;
